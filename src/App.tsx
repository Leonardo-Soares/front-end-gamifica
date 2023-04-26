import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalContextProvider } from './context/GlobalContextProvider';
import { Footer } from '@components/Footer';
import Home from '@pages/Home';
import { FormExample } from '@pages/Form';
import PageNotFound from '@pages/404';
import Presentation from '@pages/Presentation';
import Modals from '@components/Modals';
import Login from '@pages/Login';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<FormExample />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Modals />
        <ToasterComponent />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

function ToasterComponent() {
  return (
    <Toaster
      toastOptions={{
        className: 'bg-zinc-500 text-white',
        style: {
          zIndex: 999999,
        },
      }}
    />
  );
}

export default App;

