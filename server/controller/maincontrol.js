exports.homepage = async (req, res) => {
    const locals = {
        title: 'Notes-Spot',
        Description: 'Efficient Node.js-based notes app for organized, synchronized, and accessible note-taking, simplifying productivity and tasks.'
    }
    res.render("index", { 
        locals, 
        layout: '../views/layouts/front-page.ejs' 
    });
}


//About
exports.about = async (req, res) => {
    const locals = {
        title: 'About-Notes-Spot',
    }
    res.render("about", locals);
}