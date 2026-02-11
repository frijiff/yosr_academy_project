const Appwrite = require('node-appwrite');

(async () => {
  const client = new Appwrite.Client();
  client.setEndpoint('https://fra.cloud.appwrite.io/v1').setProject('69852cb4003496ea2e8d').setKey('standard_34b9d54516177655a8ecac981295174710b8f511f4cb2dae59171459382f0e392b0a59b72d143045d1f8777e8d59ab7765f84790b12fd3c7d0da917d6654457d7b24db70d292477d4dfb63d27952d3a735c3e0c17d1305a8e24fb99830e3495f20a373accb135a718309c81f1f6f59670210d43f8e6c62f753836a7ea008fe5c');

  const databases = new Appwrite.Databases(client);

  try {
    // Try to create a row using createDocument or createRow
    if (typeof databases.createRow === 'function') {
      console.log('Using createRow');
      const res = await databases.createRow('enrollment-db', 'enrollments', 'sdk-test-2', {
        parentName: 'SDK Parent',
        phone: '95 000 111',
        children: JSON.stringify([{ name: 'SDK Kid', grade: 'إبتدائي', subject: 'french' }]),
        status: 'pending',
        submittedAt: new Date().toISOString()
      });
      console.log('Created', res);
    } else if (typeof databases.createDocument === 'function') {
      console.log('Using createDocument');
      const res = await databases.createDocument('enrollment-db', 'enrollments', 'sdk-test-2', {
        parentName: 'SDK Parent',
        phone: '95 000 111'
      });
      console.log('Created', res);
    } else {
      console.log('No create method found on databases service', Object.keys(databases));
    }
  } catch (err) {
    console.error('Error', err);
  }
})();