const express = require('express')
const app = express()
const port = 3000
//get này hiểu là route, khi gõ /tin-tuc vào search box thì sẽ lao thẳng vào tin tức
app.get('/xin-chao', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})