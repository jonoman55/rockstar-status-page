import ReactDOM from 'react-dom';
import { AppContextProvider } from './contexts/AppContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <ThemeContextProvider>
    <AppContextProvider>
    <App />
  </AppContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);