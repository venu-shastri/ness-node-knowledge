const express=require('express');
const bodyParser=require('body-parser');
const cookirParser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const passport=require('passport');


//Local Array for user management
const USERS=[
    {email:'venu@ness.com',password:'12345'},
    {email:'gopal@ness.com',password:'54321'}
];

let JwtStrategy=require('passport-jwt').Strategy;
let ExtractJwt=require('passport-jwt').ExtractJwt;
let GoogleStrategy=require('passport-google-oauth20').Strategy;

//server setup
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookirParser());
app.use(passport.initialize());


let opts={
    jwtFromRequest:function(req){
        let token=null;
        if(req && req.cookies){
            token=req.cookies["jwt"];
        }
        return token;
    },
    secretOrKey:'secret'
};

passport.use(new JwtStrategy(opts,function(jwt_payload,done){
    console.log("JWT based Validation Called");
    console.log("JWT Payload  is",jwt_payload);
    if(validateUser(jwt_payload.data)){
        return done(null,jwt_payload.data);
    }
    else{
        return done(null,false);
    }
}));


let googleStratergyOptions={
    clientID:"1046392473458-ct3m9ck6u9ivitlgf0m78168mtjcvreh.apps.googleusercontent.com",
    clientSecret:"aP1wYzbKbsEJIY5sXxlK-kAI",
    callbackURL:"http://127.0.0.1:7000/google/callback"
}
passport.use(
    new GoogleStrategy(googleStratergyOptions,
        function(accessToken,refreshToken,profile,cb){
            console.log(accessToken,refreshToken,profile);
            console.log("Google Based OUATH Validtaion Called");
            return cb(null,profile);
        }));

passport.serializeUser(function(user,cb){

    console.log("Serializer Callled");
    cb(null,user);
})
passport.deserializeUser(function(obj,cb){
    console.log("DeSerializer Callled");
    cb(null,obj);
})
//api
app.get("/",(req,res)=>{

    console.log(req.url);
    res.sendFile('main.html',{root:__dirname+"/public"});
});

app.get("/login",(req,res)=>{

    res.sendFile('login.html',{root:__dirname+"/public"});
});

app.get("/auth/local",(req,res)=>{

    res.sendFile('login_form.html',{root:__dirname+"/public"});
});

app.post("/auth/local",(req,res)=>{
    if(validateUser(req.body)){
        
        //token 
        let token=jwt.sign(
            {data:req.body},'secret',{expiresIn:'1h'});
            //Cookie
            res.cookie('jwt',token);
            res.send(`Log in Successfull for ${req.body.email}` );
    }
    else{
        res.send("Invalid Credentials");
    }

});

app.get("/home",passport.authenticate('jwt',{session:false}),(req,res)=>{

    res.send(`Welcome ${req.user.email}`);
});

app.get("/auth/gmail",passport.authenticate("google",{scope:['profile','email']}));
app.get('/google/callback',passport.authenticate('google'),(req,res)=>{
            let user={
                    name:req.user.given_Name,
                    email:req.user._json.email,
                    provider:req.user.provider
            }
            console.log("Google Callback",user);
            findUser(user);
            let token=jwt.sign({data:user},'secret',{expiresIn:'1h'});
            res.cookie("jwt",token);
            res.redirect("/");
        }
);

function findUser(user){
    if(validateUser(user)){ return user;}
    else { USERS.push(user);}
}

function validateUser(user){
        for(let index in USERS){
                if(
                    user.email==USERS[index].email &&
                    (user.password==USERS[index].password || USERS[index].provider==user.provider)){
                    console.log("User Found in Data");
                    return true;
                }
                else{
                        null;
                }
        }
        return false;
}
const port=process.env.PORT || 7000
app.listen(port,()=>{  console.log('Server Started and Listening on Port 7000')});