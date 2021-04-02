import mongoose from'mongoose'


//db config
const connection_url = 'mongodb+srv://admin:iWzxYxztmw3YUASV@cluster0.0tcua.mongodb.net/tiktokclone?retryWrites=true&w=majority';

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})