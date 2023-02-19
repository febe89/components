import './App.css'
import Accordion from './components/Accordion'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Table from './components/Table'

function App() {
  return (
    <div className='App'>
      <Hero />
      <Layout />
      <Carousel />
      <Table />
      <Accordion />
    </div>
  )
}

export default App
