import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work, Award, Graphics } from './container';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Award />
      <Graphics />
      <Footer />
    </div>
  );
}

export default App;