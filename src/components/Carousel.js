import img from './maria.jpg'
import './Carousel.css'
const Carousel = () => {
  return (
    <div className='carousel'>
      <img src={img} alt='' />
      <blockquote className='testimonial'>
        <p className='testimonial-text'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rerum dolorem, fugit voluptatem praesentium ut fugit expedita modi nesciunt qui ipsa eos reprehenderit obcaecati velit numquam cum"</p>
        <p className='testimonial-author'>Shaikh Quadeer</p>
        <p className='testimonial-job'>Developer- Java Fullstack</p>
      </blockquote>
      <button className='btn btn--left'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='btn-icon'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
      </button>
      <button className='btn btn--right'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='btn-icon'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      </button>
      <div className='dots'>
        <button className='dot'>&nbsp;</button>
        <button className='dot'>&nbsp;</button>
        <button className='dot'>&nbsp;</button>
        <button className='dot'>&nbsp;</button>
      </div>
    </div>
  )
}
export default Carousel
