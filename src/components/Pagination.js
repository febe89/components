import './Pagination.css'
const Pagination = () => {
  return (
    <div className='pagination'>
      <button className='btn'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='btn-icon'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
      </button>
      <a href='' className='page-link'>
        1
      </a>
      <a href='' className='page-link'>
        2
      </a>
      <a href='' className='page-link'>
        3
      </a>
      <a href='' className='page-link'>
        4
      </a>
      <a href='' className='page-link'>
        5
      </a>
      <a href='' className='page-link'>
        6
      </a>
      <span className='dots'>...</span>
      <a href='' className='page-link'>
        23
      </a>
      <button className='btn'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='btn-icon'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      </button>
    </div>
  )
}
export default Pagination
