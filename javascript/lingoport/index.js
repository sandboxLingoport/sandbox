const express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('pages/signin')
    // res.send('This is the home page.')
    res.render('pages/index')

})

let userAPI = express.Router()

userAPI.get('/', (req, res) => {
    // res.send('users')
    res.render('pages/user')
})


let signinAPI = express.Router()
signinAPI.get('/', (req, res) => {
    // res.send('users sigin page')
    res.render('pages/signin')
})

let adminAPI = express.Router()

adminAPI.get('/', (req, res) => {
    res.send('The admin page')
})

let itemsAPI = express.Router()
itemsAPI.get('/', (req, res) => {
    res.send('The items page')
})

app.use('/api/users', userAPI)
app.use('/api/admin', adminAPI)
app.use('/api/items', itemsAPI)
app.use('/api/signin', signinAPI)

app.use(express.static(__dirname + '/public'))

app.listen(8080, () => {
    console.log('Listening on port 8080')
})
