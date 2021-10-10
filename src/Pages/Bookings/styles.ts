import styled from 'styled-components';
import Theme from '../../components/Theme';
import Ship from '../../assets/icons/svg/ship.svg';
import Plane from '../../assets/icons/svg/reshot-airplane.svg';
import Truck from '../../assets/icons/svg/truck.svg';
import Custom from '../../assets/icons/svg/policeman.svg';

export const Container = styled.main`
  padding: 1.5rem 8rem;

  .arrowback--wrapper {
    display: flex;
    align-items: flex-start;
    gap: 10rem;
  }

  .quotetext--wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .section-wrapper {
    margin: 1.3rem 12rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .card--wrapper {
    display: flex;
  }

  .input__date,
  .input__cargo,
  .input__incoterms {
    flex-basis: 30%;
  }

  .input--wrapper {
    display: flex;
    justify-content: space-between;
  }

  .input--location__from {
    flex-basis: 40%;
  }
  .input--location__to {
    flex-basis: 40%;
  }

  .input--card {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 3.7rem;
    padding: 1.2rem 1rem;
    font-size: 1.2rem;
    color: ${Theme.colorPallete.darkGrey};
    font-weight: 500;
    border: 1px solid ${Theme.colorPallete.lightGrey};

    &__export {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: -13px;
        left: -3px;
        width: 1.4px;
        height: 3.9rem;
        background: ${Theme.colorPallete.lightGrey};
      }
    }
  }

  .cargo {
    &--header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &--toggle__btn {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .cargo--dimensions {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 3rem;
  }

  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__item {
      display: flex;
      align-items: center;
      gap: 1.3rem;
    }
  }
`;

export const TextPrimary = styled.h2`
  font-size: 1.5rem;
  color: '#404040';
`;
export const TextTertiary = styled.p`
  font-size: 1.3rem;
  color: ${Theme.colorPallete.darkGrey};
`;

export const Section = styled.section`
  background-color: ${Theme.colorPallete.white};
  padding: 2rem 6rem;
  border-radius: 0.4rem;

  .card--wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .mt-3 {
    margin-top: 3rem;
  }
`;

export const Card = styled.div`
  border-radius: 0.3rem;
  padding: 1.5rem 1rem;
  background: url(${Ship});
  background-repeat: no-repeat;
  background-position: bottom -17px right -10px;
  background-size: 6rem;
  width: 20rem;
  height: 6rem;
  border: 1px solid ${Theme.colorPallete.lightGrey};
  p {
    font-size: 1.2rem;
    color: ${Theme.colorPallete.darkGrey};
  }
`;
export const CardPlane = styled.div`
  border-radius: 0.3rem;
  padding: 1.5rem 1rem;
  background: url(${Plane});
  background-repeat: no-repeat;
  background-position: bottom -20px right -20px;
  background-size: 7rem;
  width: 20rem;
  height: 6rem;
  background-color: ${Theme.colorPallete.themeBlue};

  p {
    font-size: 1.2rem;
    color: #fff;
  }
`;

export const TextSecondary = styled.p`
  font-size: 1.5rem;
`;

export const CardTruck = styled.div`
  border-radius: 0.3rem;
  padding: 1.5rem 1rem;
  background: url(${Truck});
  background-repeat: no-repeat;
  background-position: bottom -10px right -6px;
  background-size: 6rem;
  width: 20rem;
  height: 6rem;
  border: 1px solid ${Theme.colorPallete.lightGrey};

  p {
    font-size: 1.2rem;
    color: ${Theme.colorPallete.darkGrey};
  }
`;
export const CardCustom = styled.div`
  border-radius: 0.3rem;
  padding: 1.5rem 1rem;
  background: url(${Custom});
  background-repeat: no-repeat;
  background-position: bottom -17px right -19px;
  background-size: 7rem;
  width: 20rem;
  height: 6rem;
  border: 1px solid ${Theme.colorPallete.lightGrey};

  p {
    font-size: 1.2rem;
    color: ${Theme.colorPallete.darkGrey};
  }
`;

export const DimensionsCard = styled.div`
  background-color: ${Theme.colorPallete.mediumGrey};
  padding: 0.3rem 0;
  padding-right: 1.7rem;
  padding-left: 0.3rem;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${Theme.colorPallete.darkGrey};

  .card-total {
    background-color: ${Theme.colorPallete.white};
    padding: 0.7rem 1.8rem;
    color: ${Theme.colorPallete.themeBlue};
  }
`;
