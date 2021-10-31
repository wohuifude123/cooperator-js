const Algorithm = {
  bubbleSort: function () {

  },
  shellSort: function () {

  },
  quicksort: function () {

  },
  randomOneTen: function() {
    return Math.floor(Math.random()*10)+1
  },
  // 生成从minNum到maxNum的随机数
  createRandom: function(minNum, maxNum) {
    switch(arguments.length){
      case 1:
        return parseInt(Math.random()*minNum+1,10);
        break;
      case 2:
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        break;
      default:
        return 0;
        break;
    }
  }
}

// export { Algorithm }

// export default Algorithm
module.exports = Algorithm
