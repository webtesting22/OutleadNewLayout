import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgiluxHome from './Components/AgiluxHome/AgiluxHome';
import './App.css';
import AgiluxNavigation from './Components/AgiluxNavigation/AgiluxNavigation';
import OutleadAboutUs from './Components/AboutUs/OutleadAboutUs';
import OutleadFooter from './Components/OutleadFooter/OutleadFooter';
import OutleadClients from './Components/OutleadClients/OutleadClients';
import OutleadServices from './Components/OutleadServices/OutleadServices';
function App() {
  return (
    <Router>
      <AgiluxNavigation />
      <Routes>

        <Route exact path="/" element={<AgiluxHome />} />
        <Route exact path="/outleadabout" element={<OutleadAboutUs />} />
        <Route exact path="/outleadclients" element={<OutleadClients />} />
        <Route exact path="/outleadservices" element={<OutleadServices />} />
      </Routes>
      <OutleadFooter />
    </Router>
  );
}

export default App;
