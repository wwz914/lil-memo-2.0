export default function(option){
  const BASE_URL="http://mashang.eicp.vip:5557"


  let {
    url="",
    method="GET",
    data={},
    header={},
    isToken=true
  }=option
  // 请求拦截
  if(isToken){
    header={
      ...header,
      Authorization: uni.getStorageSync('token')//加入token
    }
  }

  return new Promise((resolve,reject)=>{
    uni.request({
      url: BASE_URL+url,
      method,
      data,
      header,
      success(res){
        // 响应拦截
        if(res.data.code!=200){
          uni.showToast({
            title:data.msg,
            icon:'error'
          })
        }
        resolve(res.data)//拆包
      },
      fail(err){
        reject(err)
      }
    })
  })
}