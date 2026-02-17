import {
  AboutSection,
  FeaturesSection,
  Header,
  StoriesSection,
  ToursSection,
} from "./components/pages/home";

function App() {
  return (
    <>
      <Header />
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
      <StoriesSection />
      {/* <section className="grid-test">
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-2-of-3">Col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 3</div>
          <div className="col-1-of-4">Col 2 of 3</div>
          <div className="col-1-of-4">Col 3 of 3</div>
          <div className="col-1-of-4">Col 3 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 3</div>
          <div className="col-1-of-4">Col 2 of 3</div>
          <div className="col-2-of-4">Col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-2-of-4">Col 2 of 3</div>
          <div className="col-2-of-4">Col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 2 of 3</div>
          <div className="col-3-of-4">Col 2 of 3</div>
        </div>
      </section> */}
    </>
  );
}

export default App;
