/**
 * Author: Abbott.liu
 * Date: 2021/01/11
 * Description: Handle data in complex scenarios
 */

const Table = {
  handleData: (data)=>{
    console.log()
  },
  searchKey: (data, keyData, keySearch)=> {
    return data.filter((item, index)=> {
      return !keySearch || !!String(item[keyData]).toLowerCase().match(keySearch)
    })
  }
}

export { Table }
