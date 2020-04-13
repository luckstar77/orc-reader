const norc = require('@npilots/norc');

// Read as iterator
let Reader = norc.Reader;
const reader = new Reader('./20200413_015958_00006_vhsnd_845eb1be-8f20-4b53-8e0e-19adb7246659')
reader.read({columns: ['id', 'foobar']}, (err, it) => {
    let i = it.next()
    while(!i.done) {
        // do something with i.value
        i = it.next()
    }
})