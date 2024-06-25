const os = require('os') 
const user = os.userInfo()
// console.log(os.uptime())
const osdata = {
     type : os.version() , 
     release : os.release() , 
     totalmem : os.totalmem() , 
     freespace : os.freemem()
}
console.log(osdata)