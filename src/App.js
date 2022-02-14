import './style/App.css';
import './style/App-T.css';
import './style/App-M.css';
import Navbar from './component/layout/Navbar';
import FormSection from './component/Form/FormSection';
import WhySection from './component/WhySection';
import ServiceSection from './component/ServiceSection';
import SliderSection from './component/SliderSection';
import Logos from './component/Logos';
import Footer from './component/layout/Footer';
import { Provider } from 'react-redux';
import store from './store';
// import FormInfo from './component/FormInfo';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
          <Navbar /> 
         < FormSection />
        {/* <FormInfo />  */}
        <ServiceSection /> 
        <WhySection />
        <SliderSection />
        <Logos />
      

        <Footer />
    
       
         </div>  
    </Provider>
  );
}

export default App;
