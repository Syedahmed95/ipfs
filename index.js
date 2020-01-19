// var express = require("express"),
// app = express(),
// ipfs = require("ipfs");

// app.get("/",(req,res)=>{

// })

// app.listen(3000, ()=>{console.log("server started")});

//IPFS
const IPFS = require('ipfs')

async function main () {
    //IPFS Creation
  const node = await IPFS.create()
  const version = await node.version()
    //Checking version of IPFS
  console.log('Version:', version.version)
    //file/data jo bhi add hoga hamara wo is tarha hi add ho raha hoga ipfs pe 
  const filesAdded = await node.add({
    path: 'hello.txt',
    content: 'Hello World 102'
  })
  //Files being add and generating the hash. if you copy the hash and put it in ipfs.io/ipfs/hash.
  //your data will be visiable to you.
  console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
  //getting the data from the hash and storing it to local drive/ or just viewing the text we generated right now.
  const fileBuffer = await node.cat(filesAdded[0].hash)

  console.log('Added file contents:', fileBuffer.toString())
}

main()