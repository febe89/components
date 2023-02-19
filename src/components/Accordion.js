import { useState } from 'react'
import './Accordion.css'
const Accordion = () => {
  const [text, setText] = useState('')
  const changeState = (e) => {
    setText()
  }
  return (
    <div className=''>
      <div className='accordion'>
        <div className='item open'>
          <p className='number'>01</p>
          <p className='text'>Where are these chairs assembled?</p>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='icon' onClick={(e) => changeState(e)}>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>

          <div className='hidden-box'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque minus aliquid debitis dignissimos dolorem totam vitae, id necessitatibus veritatis autem deleniti neque eum, incidunt sunt molestiae velit, a nam distinctio blanditiis! Veritatis dolore fuga atque? Aliquam quia vitae voluptate! Omnis quod cumque enim fugiat non placeat perferendis? Facilis, suscipit!</p>
            <ul>
              <li>Lorem ipsum dolor sit, amet consectetur . At facilis fugiat eius </li>
              <li>quas atque cupiditate ullam, sed numqua tempora incidunt?</li>
              <li>Lorem ipsum dolor sit, amet consectetur . Est, eius aspernatur </li>
              <li>lpa inventore nemo adipisci architecto sdam minus?</li>
            </ul>
          </div>
        </div>
        <div className='item '>
          <p className='number'>02</p>
          <p className='text'>How long do i have to return my chair?</p>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='icon' onClick={(e) => changeState(e)}>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <div className='hidden-box'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque minus aliquid debitis dignissimos dolorem totam vitae, id necessitatibus veritatis autem deleniti neque eum, incidunt sunt molestiae velit, a nam distinctio blanditiis! Veritatis dolore fuga atque? Aliquam quia vitae voluptate! Omnis quod cumque enim fugiat non placeat perferendis? Facilis, suscipit!</p>
            <ul>
              <li>Lorem ipsum dolor sit, amet consectetur . At facilis fugiat eius </li>
              <li>quas atque cupiditate ullam, sed numqua tempora incidunt?</li>
              <li>Lorem ipsum dolor sit, amet consectetur . Est, eius aspernatur </li>
              <li>lpa inventore nemo adipisci architecto sdam minus?</li>
            </ul>
          </div>
        </div>
        <div className='item'>
          <p className='number'>03</p>
          <p className='text'>Do you ship to countries outside EU?</p>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='icon' onClick={(e) => changeState(e)}>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <div className='hidden-box'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque minus aliquid debitis dignissimos dolorem totam vitae, id necessitatibus veritatis autem deleniti neque eum, incidunt sunt molestiae velit, a nam distinctio blanditiis! Veritatis dolore fuga atque? Aliquam quia vitae voluptate! Omnis quod cumque enim fugiat non placeat perferendis? Facilis, suscipit!</p>
            <ul>
              <li>Lorem ipsum dolor sit, amet consectetur . At facilis fugiat eius </li>
              <li>quas atque cupiditate ullam, sed numqua tempora incidunt?</li>
              <li>Lorem ipsum dolor sit, amet consectetur . Est, eius aspernatur </li>
              <li>lpa inventore nemo adipisci architecto sdam minus?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Accordion
