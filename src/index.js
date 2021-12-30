import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './contexts/AppContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import './styles/index.css';

ReactDOM.render(
  <ThemeContextProvider>
    <AppContextProvider>
    <App />
  </AppContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);