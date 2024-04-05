const express = require('express')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/auth', (req, res) => {
    const streamKey = req.body.key
    console.log(req.body)
    if(streamKey === "gaurab"){
        return res.send(200)
    }else{
        return res.send(400)
    }
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})