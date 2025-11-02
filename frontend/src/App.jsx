import react  from 'react'
import Routes from './pages/Routes.jsx';
import './index.css';
import AppRouter from './routes/AppRouter.jsx';
import '@ant-design/v5-patch-for-react-19';

function App() {


  return (
    <>
      
      {/* <Routes /> */}
      <AppRouter />
    </>
  )
}

export default App
