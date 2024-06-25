const  log = console.log.bind(console);


const path = require('path') 
log(path.sep)
const filename = path.join('/content' , 'subfolder' , 'text.txt') 
const  base = path.basename(filename) 
 console.log(base)
 const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'text.txt')
 log(absolute) 
