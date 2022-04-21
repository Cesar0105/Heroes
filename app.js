//para modulos locales utilizamos ./ para los nativos no 
const express=require('express');
const app=express();
const path=require('path');
app.use(express.static('public'));

const port=3030;

app.listen(port,()=>console.log('Servidor arriba'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
} );

app.get('/babbage',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/babbage.html'))
} );

app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
} );

app.get('/clarke',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
} );

app.get('/hamilton',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
} );

app.get('/hopper',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/hopper.html'));
} );

app.get('/lovelace',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/lovelace.html'));
} );

app.get('/turing',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/turing.html'));
} );
//Ruta Creditos
app.get('/creditos',(req,res)=>{
    res.send(path.send('Creditos a y los developers'));
} );
//Ruta 404
app.get('*',(req,res)=>{
    res.status(404).send('404 not found.<br>!Houston, tenemos un problema!');
} );


