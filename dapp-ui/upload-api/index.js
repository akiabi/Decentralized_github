const express =require("express");
const app =express();
app.post("/upload",(req,res)=> {
	res.json({cool :"yeah"});
});
app.listen(3344,() => console.log("Running on localhost"));