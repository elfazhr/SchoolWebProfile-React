import Aktivitas from "./components/Aktivitas";
import Beranda from "./components/Beranda";
import Fasilitas from "./components/Fasilitas";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tentang from "./components/Tentang";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="beranda">
          <Beranda/>
        </div>
        <div id="tentang">
          <Tentang/>
        </div>
        <div id="fasilitas">
          <Fasilitas/>
        </div>
        <div id="aktivitas">
          <Aktivitas/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
