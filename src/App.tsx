import { useState } from 'react'
import "./sass/main.scss";
import Login from './components/Login';
import Register from './components/Register';
import Tab from './components/Tab';
import TabItem from './components/TabItem';
import LanguageContext from './contexts/language-context'

function App() {
  const [language] = useState('tr')

  return (
    <LanguageContext.Provider value={{ language }}>
      <div className="container">
        <div className="card">
          <Tab>
            <TabItem id="tabs__tab--login" text="Giriş Yap" color="green" isDefault>
              <Login />
            </TabItem>
            <TabItem id="tabs__tab--register" text="Üye Ol" color="red">
              <Register />
            </TabItem>
          </Tab>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;