export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Post to Google Apps Script URL
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return Response.json({ success: false, error: 'Google Script URL not configured' }, { status: 500 });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false, error: 'Failed to save to Google Sheets' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
