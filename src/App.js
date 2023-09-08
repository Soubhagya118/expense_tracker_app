import { Outlet } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import { AuthContextProvider } from './components/store/AuthCtx';

function App() {
  return (
    <AuthContextProvider>
    <section style={{marginTop:'0px',left:'0',right:'0',width:'100%',position:'fixed'}} >
     <Header/>
     <Outlet/>
    </section>
    <section>Footer of Expense Tracker</section>
    </AuthContextProvider>
  );
}

export default App;
