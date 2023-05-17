import './App.css';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import { lightTheme } from './themes/light';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
