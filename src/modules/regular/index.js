const Regular = {
  /**
   *  获取URL参数的值
   */
  getQueryString: (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  },
  /**
   * 去除前后空格
   */
  trimStr: function (str) {
    if (str && typeof str === 'string') {
      return str.replace(/(^s*)|(s*)$/ig, '') // 去除前后空白符
    }
  }
}

export { Regular }
