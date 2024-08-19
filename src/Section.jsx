import './Section.css'
import img1 from './assets/section-img1.png'
import img2 from './assets/section-img2.png'

function Section() {

  return (
    <>
      <div id='section'>
        <h2>Section</h2>
        <section id='section-1'>
          <img src={img1} />
          <div>
            <h3>Card Title</h3>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui. Stet detraxit deseruisse nec ne. Eum eu altera deterruisset, quas augue graecis ne per, quo aeterno mentitum scribentur ex. Cum propriae periculis assueverit ea, in iriure accusata ius. Causae blandit argumentum sed at, appellantur liberavisse consectetuer ei cum.</p>
          </div>
        </section>
        <section id='section-2'>
          <div>
            <h3>Card Title</h3>
            <p>Lorem ipsum dolor sit amet, ne quando populo qui. Stet detraxit deseruisse nec ne. Eum eu altera deterruisset, quas augue graecis ne per, quo aeterno mentitum scribentur ex. Cum propriae periculis assueverit ea, in iriure accusata ius. Causae blandit argumentum sed at, appellantur liberavisse consectetuer ei cum.</p>
          </div>
          <img src={img2} />
        </section>
      </div>
    </>
  )
}

export default Section
