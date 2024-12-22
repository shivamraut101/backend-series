const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log("Brower is hitting the backend 3");
    res.setHeader('Content-Type', 'text/html');
    let path = './page'
    switch (req.url) {
        case '/':
            path+='/index.html'
            break;
        case '/about':
            path+='/about.html'
            break;
        case '/service':
            path+='/service.html'
            break;
        case '/contact':
            path+='/contact.html'
            break;
        case '/gallery':
            path+='/gallery.html'
            break;
    
        default:
            path+='/contact.html'
            break;
    }
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            // res.write(fileData); if there only one paeg to send then we can use that in re.end
            res.end(fileData);
        }
    })
    // res.write("Hey Iam from backend");
    // res.end();
});

server.listen(3000,()=>{
    console.log("Server is on at port 3000");
});