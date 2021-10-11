import styled from 'styled-components';
import Theme from '../../components/Theme';
import Ship from '../../assets/icons/svg/ship.svg';
import Plane from '../../assets/icons/svg/reshot-airplane.svg';
import Truck from '../../assets/icons/svg/truck.svg';
import Custom from '../../assets/icons/svg/policeman.svg';

export const Container = styled.main`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.5rem 8rem;
  }

  .arrowback--wrapper {
    display: flex;
    align-items: flex-start;
    gap: 0.3rem;
    @media (min-width: 768px) {
      gap: 10rem;
    }
  }

  .quotetext--wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .section-wrapper {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    @media (min-width: 768px) {
      margin: 0 12rem;
    }
  }

  .card--wrapper {
    display: flex;

    &__item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
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
        top: -11px;
        left: -3px;
        width: 1.4px;
        height: 3.8rem;
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
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 3rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .services {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.3rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    &__item {
      width: 100%;
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
  padding: 2rem;
  border-radius: 0.4rem;

  @media (min-width: 768px) {
    padding: 2rem 6rem;
  }

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
  width: 100%;
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
  width: 100%;
  height: 6rem;
  background-color: ${Theme.colorPallete.themeBlue};

  p {
    font-size: 1.2rem;
    color: #fff;
  }
`;

export const TextSecondary = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const CardTruck = styled.div`
  border-radius: 0.3rem;
  padding: 1.5rem 1rem;
  background: url(${Truck});
  background-repeat: no-repeat;
  background-position: bottom -10px right -6px;
  background-size: 6rem;
  width: 100%;
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
  width: 100%;
  height: 6rem;
  border: 1px solid ${Theme.colorPallete.lightGrey};

  p {
    font-size: 1.2rem;
    color: ${Theme.colorPallete.darkGrey};
  }
`;

export const DimensionsCard = styled.div`
  background-color: ${Theme.colorPallete.mediumGrey};
  padding: 0.28rem 0;
  padding-right: 2rem;
  padding-left: 0.3rem;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${Theme.colorPallete.darkGrey};

  .card-total {
    background-color: ${Theme.colorPallete.white};
    padding: 0.7rem 1.8rem;
    color: ${Theme.colorPallete.themeBlue};
  }
`;
