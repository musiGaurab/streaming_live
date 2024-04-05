const express = require('express')
const path = require('path');
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "*"
}))
console.log(path.join(__dirname))
// app.use('/hls', express.static(path.join(__dirname, 'hls')));

app.use('/hls', express.static(path.join(__dirname, 'hls'), { extensions: ['m3u8'] }));



// app.use('/hls', express.static(path.join(__dirname, 'hls')));


// app.use('/hls', express.static('/hls'));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });


app.listen(4005, '0.0.0.0', () => {
    console.log("streaming server running on port 4005")
})