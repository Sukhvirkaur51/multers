var express=require('express');
var multer =require('multer');
var bodyparser=require('body-parser');

var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/image.html");
});

var st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./pictures");
    },filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }

    });

        var fileup=multer({storage:st}).single('image');


        app.post('/upload',(req,res)=>{
            fileup(req,res,(err)=>{
                if(err){
            console.log("file uploading failed"+err);
            res.send(err);
                }
                else{
                    console.log("file uploading successfully");
                    res.send("file uploading successfully");
                }
            })
        })
    


app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
else{
    console.log("server is running");
}
    
})

