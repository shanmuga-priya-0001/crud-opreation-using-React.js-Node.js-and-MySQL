
import './App.css';
import { ReactToMysql } from './Create';
import { ViewEditDelete } from './ViewEditDelete';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { View } from './View';
import { Update } from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ViewEditDelete />} />
       <Route path="/create" element={<ReactToMysql />} />
       <Route path="/read/:id" element={<View />} />
       <Route path="/edit/:id" element={<Update />} />
      </Routes>
      </BrowserRouter>
      
    
      
    </div>
  );
}

export default App;
