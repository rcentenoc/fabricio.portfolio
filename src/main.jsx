import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Archive from './sections/Archive.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/projectsArchive" element={<Archive />} />
      <Route path="/" element={<App />} />
    </Routes>
  </HashRouter>
)