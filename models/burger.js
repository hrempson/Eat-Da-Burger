const orm = require('../config/orm');


const burger = {

    all(columns, cb) {
        orm.selectAll(columns, "burgers", cb);

    },

    create(data, cb) {
        orm.insertOne("burgers", data, cb)
    },
    
    update() {

    }
};

module.exports = burger;
