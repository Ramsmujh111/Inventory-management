const mongoose = require('mongoose');

let uri = process.env.MONGOOSE_URI;
async function getConnect(){
    try {
       let con = await mongoose.connect(uri)
       if(con){
         console.log(`Database connection is establish`)
       }else{
        console.log(`something goes wrong`)
       }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getConnect;