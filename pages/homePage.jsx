import { Link, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/navBar';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';

export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <NavBar/>
      <div className='w-full h-[calc(100vh-100px)] bg-fuchsia-300'>
        <Routes path="/*">
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/productInfo/:id" element={<ProductOverview/>} />
  
      </Routes>
      </div>
    </div>
  );
}
