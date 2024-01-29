import ColorSchemesExample from "../components/Navbar";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />
        <div className="home-container">
          <h1>
            Yoga is the journey of the self, through the self, to the self.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
