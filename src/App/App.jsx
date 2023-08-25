import {
  Features,
  TopNFTs,
  Footer,
  Header,
  JoinUs,
  Hero,
  Main,
} from "../sections";

// const Main = lazy(() => import("../sections"));
// const Hero = lazy(() => import("../sections"));
// const TopNFTs = lazy(() => import("../sections"));
function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Features />
        <TopNFTs />
        {/* <JoinUs /> */}
      </Main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
