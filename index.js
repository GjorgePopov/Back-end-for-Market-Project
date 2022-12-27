const express = require('express')
let cors = require('cors')
const port = 3001
let app = express()

app.use(cors())

app.get('/items', (req, res) => {
  const items = [
    { id: 1, product: 'Eggs', price: '8.89$', imageUrl: 'https://static.wixstatic.com/media/ad420a_ff4d6acf76634f0583713f2150fc5edf~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_ff4d6acf76634f0583713f2150fc5edf~mv2.jpg' },
    { id: 2, product: 'Paper Towels', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/ad420a_9b2bd4e5fc54447dbdf3a94f9b2847a3~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_9b2bd4e5fc54447dbdf3a94f9b2847a3~mv2.jpg' },
    { id: 3, product: 'Tomato', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/ad420a_520bee0ba61f4eb587f3f383295cf9b4~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_520bee0ba61f4eb587f3f383295cf9b4~mv2.jpg' },
    { id: 4, product: 'Chesse', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/ad420a_ae535a2c88b3440a81465fd4399512bb~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_ae535a2c88b3440a81465fd4399512bb~mv2.jpg' },
    { id: 5, product: 'Dish liquid', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/ad420a_78a5484fc6be43f797a29759e65474fd~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_78a5484fc6be43f797a29759e65474fd~mv2.jpg' },
    { id: 6, product: 'Apples', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/84770f_ab8ca2b7a35d48cfbb8aec62e1326f62~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_ab8ca2b7a35d48cfbb8aec62e1326f62~mv2.jpg' },
    { id: 7, product: 'Apples', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/84770f_ab8ca2b7a35d48cfbb8aec62e1326f62~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_ab8ca2b7a35d48cfbb8aec62e1326f62~mv2.jpg' },
    { id: 8, product: 'Apples', price: '10.99$', imageUrl: 'https://static.wixstatic.com/media/84770f_ab8ca2b7a35d48cfbb8aec62e1326f62~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_ab8ca2b7a35d48cfbb8aec62e1326f62~mv2.jpg' },

  ]
  res.send(items)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
