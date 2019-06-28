const express = requires("express");
const path = requires("path"); 
const app = requires("express");
const port = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, "public")));
app.listsen(port);

module.export = app