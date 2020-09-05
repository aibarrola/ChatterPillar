const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) =>{
    const sentEmail = req.body.email;
    User.find({email : sentEmail })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const firstname= req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const bio = req.body.bio;

    const newUser = new User({firstname,lastname, email, password, bio})

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' +err));



});

module.exports = router;
