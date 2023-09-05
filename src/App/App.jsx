import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Features,
  TopNFTs,
  Footer,
  Header,
  JoinUs,
  Hero,
  Main,
} from "../sections";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Features />
        <TopNFTs />
        <JoinUs />
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
