import { Link } from 'react-router-dom';
import { Container, BrandText, InputSearch, Nav } from './styles';
import { SearchIcon } from '../../assets/icons';

const Navigation = () => {
  const sumbitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <BrandText>
        <span>send</span> FREIGHT
      </BrandText>
      <form action="" className="search" onSubmit={sumbitHandler}>
        <InputSearch
          type="text"
          placeholder="Search"
          name="search"
          autoComplete="off"
        />
        <button className="search__button">
          <SearchIcon />
        </button>
      </form>

      <Nav>
        <Link to="/" className="link in-active">
          Request Quote
        </Link>
        <Link to="/" className="link active">
          Book Shipment
        </Link>
      </Nav>

      <div className="harmbugger">
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
    </Container>
  );
};

export default Navigation;
