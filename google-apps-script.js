// Google Apps Script code for handling contact form submissions
// Deploy this as a web app and use the URL in your .env file

function doPost(e) {
  try {
    // Open the Google Sheet by ID
    const sheetId = '11WpinKiATVrsUk81pG8UZeImA4sSCvk-_odA6E9Dg5o';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Get the data from the POST request
    const data = JSON.parse(e.postData.contents);

    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.service || '',
      data.message
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error:', error);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    service: 'residential',
    message: 'Test message'
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  Logger.log(result.getContent());
}
