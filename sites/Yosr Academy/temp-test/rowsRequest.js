const fetch = global.fetch || ((...args) => import('node-fetch').then(({default: f}) => f(...args)));

(async () => {
  const endpoint = 'https://fra.cloud.appwrite.io/v1';
  const project = '69852cb4003496ea2e8d';
  const key = 'standard_34b9d54516177655a8ecac981295174710b8f511f4cb2dae59171459382f0e392b0a59b72d143045d1f8777e8d59ab7765f84790b12fd3c7d0da917d6654457d7b24db70d292477d4dfb63d27952d3a735c3e0c17d1305a8e24fb99830e3495f20a373accb135a718309c81f1f6f59670210d43f8e6c62f753836a7ea008fe5c';

  // Test GET database meta
  let res = await fetch(`${endpoint}/databases/enrollment-db`, { headers: { 'X-Appwrite-Project': project, 'X-Appwrite-Key': key } });
  console.log('GET /databases/enrollment-db status', res.status);
  console.log(await res.text());

  // Test POST row
  const body = {
    parentName: 'SDK Parent',
    phone: '95 000 111',
    children: JSON.stringify([{ name: 'SDK Kid', grade: 'إبتدائي', subject: 'french' }]),
    status: 'pending',
    submittedAt: new Date().toISOString()
  };

  res = await fetch(`${endpoint}/databases/enrollment-db/tables/enrollments/rows`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Appwrite-Project': project, 'X-Appwrite-Key': key },
    body: JSON.stringify(body)
  });
  console.log('POST /databases/.../rows status', res.status);
  console.log(await res.text());
})();