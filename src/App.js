import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import backgroundMonkey from './img/fundo-macaco-virado.png'


function App() {
  const API_KEY = "22TIF6SN6QPR"
  const search = "monkey"

  const [data, setData] = useState([])
  const [monkey,setMonkey] = useState("")

  
  const selectMonkey = () => {
    let selected = Math.floor(Math.random() * 50)
    return selected
  }

  const getMonkey = async () => {
    const fetch = await axios.get("https://g.tenor.com/v1/search?q=" + search + "&key=" + API_KEY + "&limit=50")
      .then(resp => {
        return resp.data.results
      })
      .catch(err => {
        return "we couldn't get you any monkeys :C"
      })
      let link = await fetch[selectMonkey()].media[0].gif.url
      setData(link)
      setMonkey(await link)

  }

  return (
    <div className="App" style={{backgroundImage: `url(${backgroundMonkey})`}}>
      <div className='title'>Get your daily dose of monkey</div>
      <img className='monkey-pic' src={monkey}/>
      <div className='disclaimer'>using <a href='https://tenor.com/gifapi/documentation'>Tenor API</a></div>
      <br/>
      <button onClick={() => { getMonkey() }}><span className='button_top'><img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/313/monkey_1f412.png"}></img></span></button>

    </div>
  );
}

export default App;


// {
//   "id": "25319926",
//   "title": "",
//   "content_description": "Monkey Chill Monkey GIF",
//   "content_rating": "",
//   "h1_title": "",
//   "media": [
//       {
//           "nanowebm": {
//               "preview": "https://media.tenor.com/images/45f9828bd697df0eecb7c0334cc2c102/tenor.png",
//               "dims": [
//                   60,
//                   60
//               ],
//               "url": "https://media.tenor.com/videos/1782cb6c34eb3c9a84fad4ad27802ecf/webm",
//               "size": 74034
//           },
//           "mediumgif": {
//               "preview": "https://media.tenor.com/images/6cc32d8557af2f9978a5ab30f6c345e4/tenor.gif",
//               "url": "https://media.tenor.com/images/20e983306b485e55781a39a7d42ad855/tenor.gif",
//               "dims": [
//                   640,
//                   640
//               ],
//               "size": 26190962
//           },
//           "loopedmp4": {
//               "url": "https://media.tenor.com/videos/3a210f3b0e3c34fe65d75d605eaa786f/mp4",
//               "dims": [
//                   640,
//                   640
//               ],
//               "preview": "https://media.tenor.com/images/f95fcf0968a2a06c5436332efd5e0059/tenor.png",
//               "size": 24221409,
//               "duration": 36.9
//           },
//           "gif": {
//               "url": "https://media.tenor.com/images/8d50e925f0ded7257c44ce90d9ae4cf7/tenor.gif",
//               "preview": "https://media.tenor.com/images/f95fcf0968a2a06c5436332efd5e0059/tenor.png",
//               "size": 20637362,
//               "dims": [
//                   498,
//                   498
//               ]
//           },
//           "tinygif": {
//               "dims": [
//                   220,
//                   220
//               ],
//               "url": "https://media.tenor.com/images/a419b1e38074bdb9ef702aa1f6272118/tenor.gif",
//               "size": 3003145,
//               "preview": "https://media.tenor.com/images/c15836eba6df85d81f44eaf9b0219e39/tenor.gif"
//           },
//           "nanogif": {
//               "size": 477790,
//               "url": "https://media.tenor.com/images/d935f71ef846fccee147f4dffad1ae01/tenor.gif",
//               "preview": "https://media.tenor.com/images/03bf382e4eede5282e9201b4cca86f77/tenor.gif",
//               "dims": [
//                   90,
//                   90
//               ]
//           },
//           "nanomp4": {
//               "dims": [
//                   60,
//                   60
//               ],
//               "url": "https://media.tenor.com/videos/ff90c4b79c608251a0c681d4bdcdd149/mp4",
//               "duration": 12.3,
//               "size": 106380,
//               "preview": "https://media.tenor.com/images/45f9828bd697df0eecb7c0334cc2c102/tenor.png"
//           },
//           "tinymp4": {
//               "duration": 12.3,
//               "url": "https://media.tenor.com/videos/a8f80d3136aad3d82d06ed74263a1bee/mp4",
//               "size": 287410,
//               "preview": "https://media.tenor.com/images/717d11b9f2414a02d86fce5ee40f3331/tenor.png",
//               "dims": [
//                   118,
//                   118
//               ]
//           },
//           "tinywebm": {
//               "url": "https://media.tenor.com/videos/3a96a0216636c55ef8c75f4520c2f92a/webm",
//               "size": 241329,
//               "dims": [
//                   118,
//                   118
//               ],
//               "preview": "https://media.tenor.com/images/717d11b9f2414a02d86fce5ee40f3331/tenor.png"
//           },
//           "webm": {
//               "size": 519011,
//               "preview": "https://media.tenor.com/images/f95fcf0968a2a06c5436332efd5e0059/tenor.png",
//               "dims": [
//                   640,
//                   640
//               ],
//               "url": "https://media.tenor.com/videos/e5eca4eca0f9b0d62d716ea6ee3655b4/webm"
//           },
//           "mp4": {
//               "duration": 12.3,
//               "dims": [
//                   640,
//                   640
//               ],
//               "size": 8074298,
//               "preview": "https://media.tenor.com/images/f95fcf0968a2a06c5436332efd5e0059/tenor.png",
//               "url": "https://media.tenor.com/videos/8438da1d5f91c927afe81a96b479116c/mp4"
//           }
//       }
//   ],
//   "bg_color": "",
//   "created": 1649293816.140192,
//   "itemurl": "https://tenor.com/view/monkey-chill-monkey-chilling-monkey-cool-gif-25319926",
//   "url": "https://tenor.com/bSo14.gif",
//   "tags": [],
//   "flags": [],
//   "shares": 1,
//   "hasaudio": false,
//   "hascaption": false,
//   "source_id": "",
//   "composite": null
// }

