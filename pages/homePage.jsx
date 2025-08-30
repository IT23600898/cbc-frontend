import { Link, Routes } from 'react-router-dom';
import NavBar from '../src/components/navBar';

export default function HomePage() {
  return (
    <div className="h-screen w-full">
    
      
      <NavBar/>
      <Routes path="/*">
      </Routes>
    </div>
  );
}
