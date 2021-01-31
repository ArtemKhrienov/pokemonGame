import { randomInt } from '../shared/helpers';

import FirstSectionBg from '../assets/img/bg.jpg';
import LastSectionBg from '../assets/img/bg2.jpg';

import Header from './HeaderBlock/Header';
import Layout from './Layout/Layout';
import Footer from './FooterBlock/Footer';

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!"/>
      <Layout id={randomInt()} title="Section title" descr="Section description!" urlBg={FirstSectionBg} />
      <Layout id={randomInt()} title="Section title" descr="Section description!" colorBg="#fafafa00" />
      <Layout id={randomInt()} title="Section title" descr="Section description!" urlBg={LastSectionBg} />
      <Footer />
    </>
  );
}

export default App;
