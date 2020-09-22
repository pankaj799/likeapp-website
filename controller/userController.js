const mongoose = require('mongoose');
const mongo = require('mongodb');
const Project = require('../model/projectmodel');
const Profile = require('../model/profile');
const Contact = require('../model/contact');


exports.getadminpanal = (req, res, next) => {
    res.render('adminpanal', {
        path: '/adminpanal',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.getindex = (req, res, next) => {
    res.render('index', {
        path: '/',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.getabout = (req, res, next) => {
    res.render('about', {
        path: '/about',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.getcontact = (req, res, next) => {
    res.render('contact', {
        path: '/contact',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.postcontact = (req, res, next) => {
    const name= req.body.name;
    const email= req.body.email;
    const subject= req.body.subject;
    const phone = req.body.phone;
    const message = req.body.message;

    Contact.findOne({email : email})
        .then(result => {
            if(result)
            {
                // req.flash('ErrorMessage','data is not correct')
                res.redirect('/contact');
            }
            else 
            {
                const details = new Contact({
                    name,
                    email,
                    subject,
                    phone,
                    message
                });
                return details.save()
                    .then(result1 => {
                        // req.flash('SuccessMessage','data is Successfully Submitted');
                        res.redirect('/contact')
                    })
            }
        }) 

}

exports.getblog = (req, res, next) => {
    res.render('blog', {
        path: '/blog',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.getproject = (req, res, next) => {
    res.render('project', {
        path: '/project',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.project = (req, res, next) => {
    const username= req.body.username;
    const str1 = req.body.email.replace(/\s+/g, '');
    const email= str1;
    const country= req.body.country;
    const idproofnumber= req.body.idproofnumber;
    // const idproof= req.file.path;
    const uwaliveid= req.body.uwaliveid;
    const dob= req.body.dob;
    const address= req.body.address;
    const agencyname = req.body.agencyname;
    const agencycode = req.body.agencycode;

    Project.findOne({email : email})
    .then(result => {
        if(result)
        {
            // req.flash('ErrorMessage','data is not correct')
            res.redirect('/project');
        }
        else 
        {
            const details = new Project({
                username,
                email,
                country,
                idproofnumber,
                // idproof,
                uwaliveid,
                dob,
                address,
                agencyname,
                agencycode
            });
            return details.save()
                .then(result1 => {
                    // req.flash('SuccessMessage','data is Successfully Submitted');
                    res.redirect('/project')
                })
        }
    })

}

exports.getprofile = (req, res, next) => {
    res.render('profile', {
        path: '/profile',
        // SuccessMsg: req.flash('SuccessMessage'),
        // ErrorMsg: req.flash('ErrorMessage') 
    })
}

exports.profile = (req, res, next) => {
    const ownername= req.body.ownername;
    const str1 = req.body.email.replace(/\s+/g, '');
    const email= str1;
    const agencyname= req.body.agencyname;
    const uwaid= req.body.uwaid;
    // const signature= req.file.path;
    const country= req.body.country;
    const idcardnumber= req.body.idcardnumber;
    const number= req.body.number;

    Profile.findOne({email : email})
    .then(result => {
        if(result)
        {
            // req.flash('ErrorMessage','data is not correct')
            res.redirect('/profile');
        }
        else 
        {
            const details = new Profile({
                ownername,
                email,
                agencyname,
                uwaid,
                // signature,
                country,
                idcardnumber,
                number
            });
            return details.save()
                .then(result1 => {
                    // req.flash('SuccessMessage','data is Successfully Submitted');
                    res.redirect('/profile')
                })
        }
    })

}

