// Quick script to insert a test row into Appwrite Tables DB
const fetch = global.fetch || ((...args) => import('node-fetch').then(({default: f}) => f(...args)));

(async () => {
  const endpoint = 'https://cloud.appwrite.io/v1';
  const project = '69852cb4003496ea2e8d';
  const key = 'standard_34b9d54516177655a8ecac981295174710b8f511f4cb2dae59171459382f0e392b0a59b72d143045d1f8777e8d59ab7765f84790b12fd3c7d0da917d6654457d7b24db70d292477d4dfb63d27952d3a735c3e0c17d1305a8e24fb99830e3495f20a373accb135a718309c81f1f6f59670210d43f8e6c62f753836a7ea008fe5c';

  const body = {
    parentName: 'Script Parent',
    phone: '95 999 888',
    children: JSON.stringify([{ name: 'Script Kid', grade: 'إبتدائي', subject: 'both' }]),
    status: 'pending',
    submittedAt: new Date().toISOString()
  };

  const res = await fetch(`${endpoint}/databases/enrollment-db/tables/enrollments/rows`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Appwrite-Project': project,
      'X-Appwrite-Key': key
    },
    body: JSON.stringify(body)
  });

  const text = await res.text();
  console.log('Status', res.status);
  try { console.log(JSON.parse(text)); } catch(e) { console.log(text); }
})();