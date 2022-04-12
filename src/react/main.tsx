import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';

import './index.scss'
import App from './App'
import {galleryData} from '@types'

const rootElement:HTMLElement = document.getElementById("root") as HTMLElement
const root = ReactDOMClient.createRoot(rootElement)
const data:galleryData = {
  url: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/299/423/80299423_1340960491120_1_600x600.JPG/dims/resize/Q_80,0:",
  title: "testing",
  artist: "abbb",
  group: "N/A",
  type: "original",
  language: "한국어",
  tags: ["female:testing","male:test"],
  date:"2022.03.01",
  sitetype:"hitomi"

}
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)