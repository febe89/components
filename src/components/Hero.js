import './Hero.css'
const Hero = () => {
  return (
    <div className=''>
      <header>
        <nav className='container'>
          <div className=''>LOGO</div>
          <div className=''>NAVIGATION</div>
        </nav>

        <div className='header-container'>
          <div className='header-container-inner'>
            <h1>A healthy meal delivered to your door every single day</h1>
            <p>The smart 365-days-per-day food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs</p>
            <a href='#' className='btn'>
              Start eating well
            </a>
          </div>
        </div>
      </header>
      <section>
        <div className='container'>
          <h2>Some random heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quas velit? Rerum neque aspernatur quaerat minus totam, quae earum quam aliquam beatae placeat quis eos ipsa inventore expedita quo fuga dicta voluptatem ipsam nulla provident? Quas sed laudantium possimus doloremque.</p>
        </div>
      </section>
    </div>
  )
}
export default Hero
