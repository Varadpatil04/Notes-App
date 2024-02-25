exports.isLoggedIn = function(req,res,next){
    if(req.user){
        next();
    }else{
        return res.render("404", { 
            layout: '../views/layouts/404_layout.ejs' 
        })
    }
}