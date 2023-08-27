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
    </>
  );
}

export default App;
