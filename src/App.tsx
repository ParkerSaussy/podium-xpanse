import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';

// Date Localization Mechanics à la Material UI
// LocalizationProvider serves as a top-level context for all child components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Root Pages
import FormBuilderPage from './pages/FormBuilder';
import FormViewerPage from './pages/FormViewer';
import FormListPage from './pages/FormList';

// Creating our custom theme to wrap the app in
const theme = createTheme({
  palette: {
    primary: {
      main: '#5166FE',
    }
  }
});

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <div className="App">
            {/* Primary Page Routes */}
            <Routes>
              <Route path="/" element={<FormListPage />} />
              <Route path="/form-builder" element={<FormBuilderPage />} />
              <Route path="/form-viewer/:formId" element={<FormViewerPage />} />
            </Routes>
          </div>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
