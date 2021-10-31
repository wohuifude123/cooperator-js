const Format = {
  /**
   * 处理子表格的数据
   * @param data
   */
  handleChildTableData: (data)=> {
    let childTableFormat = {
      "type": "grid",
      "showType": "grid",
      "name": null,
      "model":null,
      "formType":null,
      "foreignKey":null,
      "editMode":null,
      "key": "1571381524000_84356",
      "icon": "",
      "attrList": [],
      "eventList": [],
      "sysGridFieldList":[
        {
          "columnAttrList":[],
          "showType":"input",
          "attrList":[],
          "sysEventList":[],
          "sysRule":{},
          "dataSourceType":null,
          "dataSource":null,
          "name":null,
          "model":null
        }
      ]
    }

    for(let key in childTableFormat) {
      if(data[key] !== undefined) {
        if(key !== "type" && key !== 'showType') {
          childTableFormat[key] = data[key]
        }
      }
    }
    // console.log('childTableFormat == ', childTableFormat)
    return childTableFormat
  },
  handleTextareaValue: function(str) {
    let des = str.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/&nbsp/g, ' '); //转换格式
    return des
  },
  handleDatabaseValue: function(str) {
    // console.log('handleDatabaseValue str == ', str)
    let regBr =new RegExp("<br>","ig");
    let regBrSlash =new RegExp("<br/>","ig");
    let regS =new RegExp("&nbsp;","ig");

    str = str.replace(regBr,"\r\n");
    str = str.replace(regBrSlash,"\r\n");
    str = str.replace(regS," ");
    // console.log('handleDatabaseValue str == ', str)
    return str
  }
}
export default Format
