import idb from 'idb'

const dbPromise = idb.open('currency-db',1, (upgradeDb)=>{
    const keyvalStore = upgradeDb.createObjectStore('keyval')
    keyvalStore.put('world', 'hello')
})


//Read from database

dbPromise.then((db)=>{
    let tx = db.transaction('keyval')
    const keyvalStore = tx.objectStore('keyval')
    return keyvalStore.get('hello')
}).then((val)=>{
    console.log('hello',val)
})


//Add Value to the database

dbPromise.then((db)=>{
    let tx = db.transaction('keyval', 'readwrite')
    let keyvalStore = tx.objectStore('keyval')

    keyvalStore.put('bar', 'foo')

    return tx.complete;

}).then(()=>{
    console.log('Added foo:bar')
})