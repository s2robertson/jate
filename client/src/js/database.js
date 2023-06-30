import { openDB } from 'idb';

const dbPromise = openDB('jate', 1, {
  upgrade(db) {
    if (db.objectStoreNames.contains('jate')) {
      console.log('jate database already exists');
      return;
    }
    db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    console.log('jate database created');
  }
});

let id;

export const putDb = async (content) => {
  console.log(`putDb called with ${content}`);
  const tx = (await dbPromise).transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const obj = id ? { id, content } : { content };
  const dbResult = await store.put(obj);
  id = dbResult;
  console.log(`Saved data with key = ${id}`);
}

export const getDb = async () => {
  const tx = (await dbPromise).transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const dbResult = await store.getAll();
  console.log(`Read from IndexedDB: ${dbResult}`);
  const res = Array.isArray(dbResult) && dbResult.length > 0 ? dbResult[0] : null;
  if (res?.id) {
    id = res.id;
  }
  return res && res.content;
}
