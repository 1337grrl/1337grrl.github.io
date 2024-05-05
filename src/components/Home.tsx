import Welcome from "./Welcome";
import About from "./About";
import ImageSlide from "./ImageCarousel";
import Programm from "./Programm";
import { Program } from "../content/Programm";
import { churches, details, wannsee } from "../content/Location";
import Team from "./Team";
import Artists from "./Artists";
import { ourArtists } from "../content/Artists";
import { ourTeam } from "../content/Team";

const program = Program;
const locations = churches;
const artists = ourArtists;
const umgebung = wannsee;
const team = ourTeam;
const kirchenausschnitte = details;

const Home: React.FC = () => {

return (
        <>
            <Welcome/>
            <About/>
            <ImageSlide images={locations} imageHeight="500px"/>
            <Artists artists={artists}/>
            <ImageSlide images={umgebung}/>
            <Programm programItems={program}/>
            <ImageSlide images={kirchenausschnitte}/>
            <Team teamMembers={team}/>
        </>
    );
};

export default Home;
