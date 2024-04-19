'use strict'

const persone = {
    name: 'Evgen',
    tel: '3333333333',
    parents: {
        mom: 'Sveta',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone));

console.log(JSON.parse(JSON.stringify(persone)))