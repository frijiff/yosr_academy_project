/* Enrollment Handler Appwrite Function
   - Reads payload from APPWRITE_FUNCTION_DATA (JSON string)
   - Validates fields and inserts a row into the tables-db via REST
*/

const endpoint = process.env._APPWRITE_FUNCTION_ENDPOINT || process.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const projectId = process.env._APPWRITE_FUNCTION_PROJECT_ID || process.env.APPWRITE_PROJECT_ID || '69852cb4003496ea2e8d';
const apiKey = process.env.APPWRITE_API_KEY; // project secret variable (set as project variable)

(async () => {
  try {
    let raw = process.env.APPWRITE_FUNCTION_DATA || '';

    // If no APPWRITE_FUNCTION_DATA, attempt to read HTTP body from stdin (HTTP trigger)
    if (!raw) {
      raw = '';
      try {
        const chunks = [];
        for await (const chunk of process.stdin) chunks.push(chunk);
        raw = chunks.length ? Buffer.concat(chunks).toString() : '';
      } catch (e) {
        raw = '';
      }
    }

    if (!raw) {
      // Called during build/validation with no input — don't fail the build.
      console.log('No payload provided during build; skipping runtime validation.');
      process.stdout.write(JSON.stringify({ success: true, message: 'build-check' }));
      process.exit(0);
    }

    const payload = JSON.parse(raw);

    const parentName = (payload.parentName || '').toString().trim();
    const phone = (payload.phone || '').toString().trim();
    const children = payload.children || [];

    if (!parentName || !phone || !Array.isArray(children) || children.length === 0) {
      console.error('Validation failed', { parentName, phone, children });
      process.stdout.write(JSON.stringify({ success: false, message: 'Validation failed' }));
      process.exit(1);
    }

    const body = {
      parentName,
      phone,
      children: JSON.stringify(children),
      status: 'pending',
      submittedAt: new Date().toISOString()
    };

    // Check whether the server key is available
    if (!apiKey) {
      console.error('Missing APPWRITE_API_KEY in environment');
      process.stdout.write(JSON.stringify({ success: false, error: 'Missing server API key in function environment' }));
      process.exit(1);
    }

    // Production: perform DB write using server API key stored in APPWRITE_API_KEY (already read)
    // (no re-declaration)

    console.log('Function will write to DB', { endpoint, projectId, hasKey: !!apiKey });

    try {
      // Use the official Node SDK to create a document in the legacy DB
      const Appwrite = await import('node-appwrite');
      const client = new Appwrite.Client();
      client.setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
      const databases = new Appwrite.Databases(client);

      const docId = 'enr_' + Math.random().toString(36).substr(2,9);
      console.log('Creating document via SDK', { docId });

      const res = await databases.createDocument('legacy-db', 'enrollments_col', docId, {
        parentName,
        phone,
        children: JSON.stringify(children),
        status: 'pending',
        submittedAt: new Date().toISOString()
      });

      console.log('SDK createDocument response', res);
      process.stdout.write(JSON.stringify({ success: true, row: res }));
      process.exit(0);
    } catch (err) {
      console.error('Unexpected error during SDK DB write', err && (err.stack || err.message || err));
      process.stdout.write(JSON.stringify({ success: false, error: err && (err.message || err) }));
      process.exit(1);
    }
  } catch (err) {
    console.error('Function error', err);
    process.stdout.write(JSON.stringify({ success: false, error: err.message || err }));
    process.exit(1);
  }
})();