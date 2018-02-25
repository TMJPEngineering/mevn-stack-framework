/* global logger */

let Model = {
    findOne,
    execute
};

function findOne(payload, callback) {
    if (payload) {
        logger(`findOne(${JSON.stringify(payload)})`);
        this.query = this.schema.findOne(payload, callback);
        return this;
    }

    logger(`findOne()`);
    this.query = this.schema.findOne();
    return this;
}

function execute() {
    logger(`execute()`);
    return this.query.exec(_exec);
}

function _exec(error, data) {
    if (error) return error;
    return data;
}

export default Model;