import CurrencyBox from './components/CurrencyBox/CurrencyBox';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

// TODO: use Node v20

const App = () => {
  return (
    <Container>
      <Header />
      <CurrencyBox />
    </Container>
  );
};

export default App;
