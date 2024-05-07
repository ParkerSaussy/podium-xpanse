import { Routes, Route } from 'react-router-dom';
import './App.css';

// Root Pages
import FormBuilderPage from './pages/FormBuilder';
import FormViewerPage from './pages/FormViewer';
import FormListPage from './pages/FormList';

function App() {
  return (
    <div className="App">
      {/* Primary Page Routes */}
      <Routes>
        <Route path="/" element={<FormListPage />} />
        <Route path="/form-builder" element={<FormBuilderPage />} />
        <Route path="/form/:formId" element={<FormViewerPage />} />
      </Routes>
    </div>
  );
}

export default App;
