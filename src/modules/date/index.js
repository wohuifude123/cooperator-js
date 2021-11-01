const DateObj = {
  /**
   * validPeriodBegin: "1619798400000"
   */
  numToStr: (value ,symbol) => {
    // console.log('symbol == ', symbol)
    if(symbol === undefined) {
      symbol = '/'
    }
    var date = new Date(parseInt(value, 10));
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + symbol + month + symbol + currentDate;
  }
}

export {DateObj};
