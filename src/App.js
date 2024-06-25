import './App.css';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme';
import SearchAppBar from './component/SearchAppBar';
import HomePage from './pages/HomePage';
// import DetailPage from './pages/DetaiPage';
import { AuthProvider } from './contexts/AuthContext';
import BasicModal from './modal/BasicModal';



function App() {
  return (
   <>
   <AuthProvider>
    <ThemeProvider>
        <SearchAppBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/job/:id" element={<BasicModal/>} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
   </>
  );
}

export default App;