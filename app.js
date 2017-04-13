import express from 'express';
import {renderToString} from 'react-dom/server';
import React from 'react';
import Component from './react-router.jsx';
import {StaticRouter as Router} from 'react-router-dom';

const app = express();

function template(data){
  return `
  <html>
  <head>
    <title>Server Side Rendering</title>
  </head>
  <body>
    <div id="app">${data}</div>
  </body>
  </html>
`;
}

app.get("/*",(req,res)=>{
  let context={};
  let rendered = template(renderToString(<Router location={req.url} context={context}><Component /></Router>));
  res.send(rendered);
});
  
const PORT = 3000;
  
app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT);
})  
  