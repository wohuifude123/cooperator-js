const Algorithm = require("./src/modules/algorithm");

const CooperatorJs = {
    name: 'CooperatorJs',
    version: '0.0.1',
    createRandom: function(min, max){
        return Algorithm.createRandom(min, max)
    }
}
module.exports = CooperatorJs;
