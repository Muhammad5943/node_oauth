const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with google
// @router GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @router GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req,res) => {
        res.redirect('/dashboard')
    }
);

// @desc Logout
// @router GET /logout
router.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;