const {writeFile , readFile} = require('fs') 
// readFile only used through callback 
console.log("Start") 
readFile('./content/first.txt' , 'utf-8'  , (err ,result)=>{
    if(err){
        return ; 

    }
    const first = result 
    readFile('./content/second.txt' , 'utf-8'  , (err ,result)=>{
        if(err){
            return ; 
    
        }
        const second  = result
        writeFile('./content/result-async.txt' , `Here is the result : ${first} , ${second}` , (err, result)=>{
             if(err){
                console.log(err) ; 
                return 
             }
             console.log('done with the task') 
        })
        
    })  

})  
// this logs earlier than done with the task because unsynchronous approach offloads readFile from node 
console.log('Start with next task')
