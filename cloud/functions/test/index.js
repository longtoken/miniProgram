const cloud = require('wx-server-sdk')

cloud.init()


exports.main = async (event,context) => {
  const wxContext = cloud.getWXContext()
  
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
        scene: event.scene,
        page: event.page,
        width: 280,
      })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}