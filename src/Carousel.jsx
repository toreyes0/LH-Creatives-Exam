//import { useState } from 'react'
import { useState } from 'react'
import './Carousel.css'
import img1 from './assets/carousel-img01.png'
import img2 from './assets/carousel-img02.png'
import img3 from './assets/carousel-img03.png'
import img4 from './assets/carousel-img04.png'
import img5 from './assets/carousel-img05.png'
import img6 from './assets/carousel-img06.png'
import prev from './assets/carousel-arrow-prev.png'
import next from './assets/carousel-arrow-next.png'

const Carousel = () => {
  const [images, setImages] = useState([img1, img2, img3, img4, img5, img6])

  function moveLastToFirst() {
    let copy = [...images]
    let lastEl = copy.pop()
    copy.unshift(lastEl)
    setImages(copy)
  }

  function moveFirstToLast() {
    let test = [...images]
    let firstEl = test.shift()
    test.push(firstEl)
    setImages(test)
  }

  return (
    <div id='carousel'>
      <h2>Carousel</h2>
      <div id='carousel-imgs'>
        {images.map((img, i) => (
          <div key={i} className='carousel-img'>
            <img src={img} />
          </div>
        ))}
        <img id='prev-btn' onClick={moveLastToFirst} src={prev} />
        <img id='next-btn' onClick={moveFirstToLast} src={next} />
      </div>
    </div>
  )
}

export default Carousel
