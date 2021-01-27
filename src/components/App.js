import FirstSectionBg from '../assets/img/bg.jpg';
import LastSectionBg from '../assets/img/bg2.jpg';

import Header from './HeaderBlock/Header';
import Layout from './Layout/Layout';
import Footer from './FooterBlock/Footer';

function App() {
  return (
    <>
      <Header />
      <Layout urlBg={FirstSectionBg} />
      <Layout colorBg="#fafafa00" />
      <Layout urlBg={LastSectionBg} />
      <Footer />
    </>
  );
}

export default App;
