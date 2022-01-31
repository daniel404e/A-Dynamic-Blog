const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
var lodash = require('lodash');

const homestartcont = "Do you feel insecure, anxious, and doubtful about your writing? Does it ever seem like you have more adversity in your life than other people do? As if everyone around you is having an easier time of things than you are? You begin to feel sorry for yourself and think, “Why does this stuff always happen to ME? We all seem to be getting more self-obsessed by the day. Turn on your TV or open a web browser, and narcissism hits you smack in the face — everything screams  ME! ME! ME!  Well Dont worry anymore you have come to the right place where its all about YOU and Technology :).Enjoy -Daniel!";
const aboutcontent = "Data is too often published in a way that’s hard to understand, check and build upon – reinforcing the low valuation it gets in society. Here is how we’re trying to break out of this bad equilibrium";
const contactcont="Just Google Worlds richest person in 15 years :).   "
 
var pagename =  "";


var composeall = [];
const app = express();

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));





app.get("/",function(req,res){
    
    
    contenttext = homestartcont;
pagename= "Home";
  
    
    res.render("home",{contentr: contenttext,whatpage: pagename,newpost: composeall});}
    
    
    
    );



    app.get("/about",function(req,res){
    
        
        contenttext = aboutcontent;
        pagename= "About";
    
        res.render("about",{contentr: contenttext,whatpage: pagename});}
        
        
        
        );


        app.get("/contact",function(req,res){
    
             
            contenttext = contactcont;
            pagename= "Contact";
    
            res.render("contact",{contentr: contenttext,whatpage: pagename});}
            
            
            
            );


            app.get("/compose",function(req,res){
    
             
                contenttext = contactcont;
                pagename= "Compose";
        
                res.render("compose") }
                
                
                
                );



            app.post("/compose",function(req,res){
                let compose = { title: "",  post: "" };
                compose.title =  req.body.addnewcontenttitle;
                compose.post  = req.body.addnewcontent;
                composeall.push(compose);
              console.log(composeall);

              res.redirect("/");

           


            });
            

       app.get("/posts/:wpost",function(req,res){

          composeall.forEach( function(element,index) {
              

            if(lodash.lowerCase(element.title) ==  lodash.lowerCase( req.params.wpost) )
            {


                 
               console.log("match found");
               res.render("post",{posttitle: element.title , postcont: element.post}); 
            }
            else{


                console.log("nope ");
                //res.redirect("/");
            }
            console.log(lodash.lowerCase(req.params.wpost));
            console.log(lodash.lowerCase(element.title));

          } );        


       });


 



app.listen(process.env.PORT || "3000",function(){console.log("on 3k");});
