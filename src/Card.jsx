import './Card.css'
import img1 from './assets/card-4col-img1.png'
import img2 from './assets/card-4col-img2.png'
import img3 from './assets/card-4col-img3.png'
import img4 from './assets/card-4col-img4.png'
import img5 from './assets/card-3col-img1.png'
import img6 from './assets/card-3col-img2.png'
import img7 from './assets/card-3col-img3.png'

function Card() {

  return (
    <>
      <div id='card'>
        <h2>Card</h2>
        <h3 id='col-4-header'>4 column card on PC</h3>
        <div id='col-4'>
          <div>
            <img src={img1} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
          <div>
            <img src={img2} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
          <div>
            <img src={img3} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
          <div>
            <img src={img4} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
        </div>
        <h3 id='col-3-header'>3  column card on PC</h3>
        <div id='col-3'>
          <div>
            <img src={img5} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
          <div>
            <img src={img6} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
          <div>
            <img src={img7} />
            <h4>Card Title</h4>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
