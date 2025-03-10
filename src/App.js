import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import TimelineCard from './components/TimelineCard.jsx';
import SponsorsTextCarousel from './components/SponsorsTextCarousel.jsx';
import SponsorsLayout from './components/SponsorsLayout.jsx';
import Mentor from './components/Mentor.jsx';
import HackathonTimeline from './components/HackathonTimeline.jsx';
import TrackTextCarousel from './components/TrackTextCarousel.jsx';
import TrackCarousel from './components/TrackCarousel';
import PrizesTextCarousel from  './components/PrizesTextCarousel.jsx';
import RulesSection from'./components/Rules.jsx';
import Footer from './components/Footer.jsx';
import ContinuousPrizes from './components/ContinousPrize.jsx';
import FaqSection from './components/Faq.jsx';
import TeamSection from './components/Team.jsx';
import Hardware from './components/Hardware.jsx';
import Location from './components/Location.jsx';
import Venue from './components/VenueText.jsx';

function App() {
  return (
    <div className=" ">
      <Header/>
   
      <TimelineCard/>
      
      <TrackTextCarousel/>
      <TrackCarousel/>
      <TrackTextCarousel/>
      <HackathonTimeline/>
      <SponsorsTextCarousel/>
      <SponsorsLayout/>
      <SponsorsTextCarousel/>
      <RulesSection/>
      <ContinuousPrizes/>
      
      <Hardware/>
      
      <Mentor/>
      <Venue/>
      <Location/>
      <Venue/>
      <TeamSection/>
      <FaqSection/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
