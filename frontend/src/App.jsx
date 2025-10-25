import react  from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {


  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to ShopEase</h1>
      </main>
      <Footer />
    </>
  )
}

export default App
