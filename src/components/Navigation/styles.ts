import styled from 'styled-components';
import Theme from '../Theme';

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.colorPallete.themeBlue};

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    &__button {
      border: none;
      outline: none;
      background-color: transparent;
    }
  }

  .link {
    text-decoration: none;
    color: ${Theme.colorPallete.white};
    font-size: 1.5rem;
    border: 1px solid ${Theme.colorPallete.white};
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
  }

  .active {
    text-decoration: none;
    background-color: ${Theme.colorPallete.lighGreen};
    color: ${Theme.colorPallete.white};
    font-size: 1.5rem;
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
  }
`;

export const BrandText = styled.h1`
  font-size: 1.4rem;
  color: ${Theme.colorPallete.white};

  span {
    font-size: 1.7rem;
  }
`;

export const InputSearch = styled.input`
  padding: 1rem 1.3rem;
  width: 80%;
  margin-right: -4rem;
  background-color: #396db9;
  border: none;
  color: ${Theme.colorPallete.lightGrey};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #85aff0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;