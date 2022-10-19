import PaginaPadrao from 'components/PaginaPadrao';
import Categoria from 'pages/Categoria';
import Home from 'pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Home />} />
          <Route path='categorias/:nomeCategoria' element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
};

export default Router;