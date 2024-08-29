// AppScript code

const sheetName = 'Sheet1';
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    // Open the spreadsheet and select the specified sheet
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);

    // Get the headers from the first row
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Prepare the data for the new row
    const newRow = headers.map(function(header) {
      // Insert the current date if the header is 'Date'
      return header === 'Date' ? new Date() : e.parameter[header] || '';
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    Logger.log('Data inserted successfully');

  } catch (err) {
    Logger.log('Error: ' + err.message);

  } finally {
    lock.releaseLock();
  }
}