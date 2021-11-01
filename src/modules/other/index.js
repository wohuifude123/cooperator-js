const Other = {
  deepClone: function (target) {
    // 定义一个变量
    let _this = this
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
      // 如果是一个数组的话
      if (Array.isArray(target)) {
        result = []; // 将result赋值为一个数组，并且执行遍历
        for (let i in target) {
          // 递归克隆数组中的每一项
          // result.push(_this.deepClone(target[i]))
          result.push(_this.deepClone(target[i]))
        }
        // 判断如果当前的值是null的话；直接赋值为null
      } else if(target===null) {
        result = null;
        // 判断如果当前的值是一个RegExp对象的话，直接赋值
      } else if(target.constructor===RegExp){
        result = target;
      } else {
        // 否则是普通对象，直接for in循环，递归赋值对象的所有值
        result = {};
        for (let i in target) {
          result[i] = _this.deepClone(target[i]);
        }
      }
      // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
      result = target;
    }
    // 返回最终结果
    return result;
  },
  /**
   * 时间格式化
   * let date = new Date()
   * let dateFormat = _this.$ObjectHelper.formatDate(date, "yyyy-MM-dd hh:mm")
   */
  formatDate: (date, fmt) => {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  },
  /**
   * 判断是否数组
   */
  isArray: (arr) => {
    return Object.prototype.toString.call(arr) === '[Object Array]'
  }
}

export { Other }


function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

/**
 * 获取当前时间，半小时为单位，当此刻时间小于30，则取整点，否则取30
 */
export const getTimeByHalfHourUnit = (date) => {
  let minute = date.getMinutes();
  let month = date.getMonth() + 1;
  let monthStr = month < 10 ? 0 + "" + month : "" + month;
  if(minute >= 30){//小时+1
    return date.getFullYear() + "-" + monthStr + "-" + date.getDate() + " " + date.getHours() + ":30";
  }else{//
    return date.getFullYear() + "-" + monthStr + "-" + date.getDate() + " " + date.getHours() + ":00";
  }
}

/**
 * 获取当前时间+一个单位，半小时为单位，当此刻时间小于30，则取整点，否则取30
 */
export const getNextTimeByHalfHourUnit = (date) =>
{
  let minute = date.getMinutes();
  let month = date.getMonth() + 1;
  let monthStr = month < 10 ? 0 + "" + month : "" + month;
  if (minute > 30) {//小时+1
    return date.getFullYear() + "-" + monthStr + "-" + date.getDate() + " " + (date.getHours() + 1) + ":00";
  } else if(minute == 0){
    return date.getFullYear() + "-" + monthStr + "-" + date.getDate() + " " + date.getHours() + ":00";
  } else {//
    return date.getFullYear() + "-" + monthStr + "-" + date.getDate() + " " + date.getHours() + ":30";
  }
}

//两个时间相差天数 兼容firefox chrome
export const datedifference = (sDate1, sDate2) => {    //sDate1和sDate2是2006-12-18格式
  let dateSpan,
      iDays;
  sDate1 = new Date(sDate1.replace(/-/g, '/'));
  sDate2 = new Date(sDate2.replace(/-/g, '/'));
  dateSpan = sDate2 - sDate1;
  // dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  return iDays
}

//两个时间相差小时数
export const datedifferenceHours = (sDate1, sDate2) => {    //sDate1和sDate2是2006-12-18格式
  let dateSpan,
      iTimes;
  sDate1 = new Date(sDate1.replace(/-/g, '/'));
  sDate2 = new Date(sDate2.replace(/-/g, '/'));
  dateSpan = sDate2 - sDate1;
  console.log('1111111111111',dateSpan);
  iTimes = dateSpan / (3600 * 1000);
  return iTimes
}


/*
 *  时间处理函数
 */
export const DateHandle = {

  // 获取当前时间戳
  GetNowTime: function () {
    return new Date().getTime()
  },
  // 获取指定日期时间戳
  GetDateTime: function (time) {
    return new Date(time.replace(/-/g, '/')).getTime()
  },
  // 获取剩余时间 小时分钟格式
  GetSurplusTime: function (time) {
    var nowtime = new Date().getTime()
    var datetime = new Date(time.replace(/-/g, '/')).getTime()

    var surplustime = parseInt((datetime - nowtime) / 1000)
    if (surplustime < 0) {
      return ''
    }
    var hour = parseInt(surplustime / 3600)
    surplustime = parseInt(surplustime - hour * 3600)
    var minutes = parseInt(surplustime / 60)
    if (hour.toString().length === 1) {
      hour = '0' + hour
    }
    if (minutes === 0) {
      return '剩余 00:01'
    }
    if (minutes.toString().length === 1) {
      minutes = '0' + minutes
    }
    // console.log('剩余 '+hour+':'+minutes)
    return '剩余 ' + hour + ':' + minutes
  },
  GetLogTime: function (time) {
    var nowtime = new Date().getTime()
    var datetime = new Date(time.replace(/-/g, '/')).getTime()
    var surplustime = parseInt((nowtime - datetime) / 1000)
    var ReturnDate = ''
    if (surplustime > 24 * 3600) {
      ReturnDate = parseInt(surplustime / (24 * 3600)) + '天前'
    } else if (surplustime > 3600) {
      ReturnDate = parseInt(surplustime / 3600) + '小时前'
    } else if (surplustime > 60) {
      ReturnDate = parseInt(surplustime / 60) + '分钟前'
    } else {
      ReturnDate = '刚刚'
    }
    return ReturnDate
  },
  // 获取剩余时间 小时分钟格式
  GetFriendRedTime: function (time) {
    if (time === '' | time === undefined) {
      return '倒计时 00:00'
    }
    var nowtime = new Date().getTime()
    var datetime = new Date(time.replace(/-/g, '/')).getTime()
    var surplustime = parseInt((datetime - nowtime) / 1000)
    if (surplustime < 0) {
      return '已过期'
    }

    var hour = parseInt(surplustime / 3600)
    surplustime = parseInt(surplustime - hour * 3600)
    var minutes = parseInt(surplustime / 60)
    if (hour.toString().length === 1) {
      hour = '0' + hour
    }
    if (minutes === 0) {
      return '即将过期'
    }
    if (minutes.toString().length === 1) {
      minutes = '0' + minutes
    }
    // console.log('剩余 '+hour+':'+minutes)
    return '倒计时 ' + hour + ':' + minutes
  }
}
/*
 *  延时器
 */
export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}


