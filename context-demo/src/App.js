import React from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ThemeContexProvider from './contexts/ThemeContex';
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from './contexts/AuthContext';
import ProductContextProvider from './contexts/ProductContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContexProvider>
          <ProductContextProvider>
            <NavBar />
            <ProductList />
            <ToggleTheme/>
          </ProductContextProvider>
        </ThemeContexProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
