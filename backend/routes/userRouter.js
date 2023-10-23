const express = require('express')
const route = express.Router()
const {
    loginUser,
    registerUser,
    userData,
    uploadCV } = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')



//login -> checking user authentication
route.post('/login', loginUser)

//register -> createing new user
route.post('/reg', registerUser)

//user => get user Data
route.get('/user', protect, userData)

// New route for uploading CVs (protected, so only authenticated users can upload)
route.post('/upload-cv', protect , uploadCV);


module.exports = route