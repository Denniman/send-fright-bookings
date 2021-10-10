import styled from 'styled-components';
import DropDown from '../../assets/icons/svg/arrow-drop-down.svg';
import Theme from '../Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .location--input {
    padding: 1rem 2.5rem;
    border: none;
    background-color: #f4f4f4;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .select {
    font-family: inherit;
    color: currentColor;
    font-size: 1.3rem;
    appearance: none;
    background-image: url(${DropDown});
    background-position: right 1rem top 50%;
    background-repeat: no-repeat;
    background-size: 3rem;
  }

  .icon {
    top: 1rem;
    left: 0.9rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormLabel = styled.div`
  position: relative;
  .labelInput {
    outline: none;
    padding: 1rem 2rem;
    border: 2px solid ${Theme.colorPallete.lightGrey};
    border-radius: 0.4rem;
    background: none;
    font-family: inherit;

    &:focus {
      outline: none;
    }
  }

  .label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    padding: 0 0.2rem;
    transition: 0.3s;
    padding: 0 0.6rem;
  }

  .labelInput:focus + .label {
    top: -0.7rem;
    left: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-weight: 700;
    padding: 0 0.6rem;
    background-color: #fff;
  }

  .labelInput:not(:placeholder-shown).labelInput:not(:focus) + .label {
    top: -0.7rem;
    left: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #fff;
    padding: 0 0.6rem;
  }
`;
