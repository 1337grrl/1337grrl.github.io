import Footer from './components/Utils/Footer';
import About from './components/About';
import Artists from './components/Artists';
import ImageSlide from './components/Utils/ImageSlide';
import Programm from './components/Programm';
import Team from './components/Team';
import { ourArtists } from './content/Artists';
import { wannsee, details } from './content/Location';
import { Program } from './content/Programm';
import { ourTeam } from './content/Team';
import Logo from './components/Logo';
import Locations from './components/Locations';
import Eintritt from './components/Eintritt';
import Motto from './components/Motto';
import InArkadien from './components/InArkadien';
import Sponsoren from './components/Sponsoren';

const program = Program;
const artists = ourArtists;
const umgebung = wannsee;
const team = ourTeam;
const kirchenausschnitte = details;

function App() {
  return (
    <>
      <Logo/>        
      <ImageSlide images={umgebung}/>
      <About/>
      <Locations/>
      <Motto/>
      <Programm programItems={program}/>
      <InArkadien/>
      <Artists artists={artists}/>
      <Sponsoren/>
      <Eintritt/>
      <ImageSlide images={kirchenausschnitte}/>
      <Team teamMembers={team}/>
      <Footer/>
    </>
  );
}

export default App;
