const _ = require('lodash')

class Conversion {

    constructor() {
        this.tab = []
    }

    convert(obj, key = 'obj') {
        if (_.size(obj) === 0) return
        _.map(obj, (item, keys) => {
            if (typeof item !== 'object') {
                this.tab.push(key + '.' + keys + ',' + item + '\n')
                return true
            }
            this.convert(item, key + '.' + keys)
        })
    }

    onceFilled() {
        return _.join(["Key,Values\n", ...this.tab], '')
    }

}

module.exports = Conversion