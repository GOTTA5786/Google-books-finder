import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import SelectedBookPage from './pages/SelectedBook/SelectedBookPage';



const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/book/:id' element={<SelectedBookPage/>}/>
      </Routes>
    </>
  )
}
export default App
