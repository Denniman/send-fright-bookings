import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  .location--input {
    padding: 1rem 2.4rem;
    border: none;
    background-color: #f4f4f4;
    width: 100%;
    position: relative;

    &:focus {
      outline: none;
    }
  }

  .fa-map-marker {
    position: absolute;
    top: 31rem;
    left: 26.8rem;
    z-index: 1;
  }
`;
