import InputLocation from '../../components/Input';
import { ArrowLeftIcon } from '../../assets/icons';
import Navigation from '../../components/Navigation';
import {
  Container,
  TextPrimary,
  TextTertiary,
  Section,
  Card,
  TextSecondary,
  CardPlane,
  CardTruck,
  CardCustom,
} from './styles';

const Bookings = () => {
  return (
    <>
      <Navigation />
      <Container>
        <div className="arrowback--wrapper">
          <ArrowLeftIcon />
          <div className="quotetext--wrapper">
            <TextPrimary>New Booking</TextPrimary>
            <TextTertiary>
              Fill in the information bellow to get a quote or create a new
              booking.
            </TextTertiary>
          </div>
        </div>

        <div className="section-wrapper">
          <Section>
            <TextPrimary>Select a service</TextPrimary>
            <div className="card--wrapper">
              <CardPlane>
                <p>Air Freight</p>
              </CardPlane>
              <Card>
                <p>Sea Freight</p>
              </Card>

              <CardTruck>
                <p>
                  Inland <br /> (Truck & Barge)
                </p>
              </CardTruck>

              <CardCustom>
                <p>
                  Custom <br />
                  Clearance
                </p>
              </CardCustom>
            </div>
          </Section>

          <Section>
            <div className="alert-wrapper"></div>
            <div className="input--wrapper">
              <InputLocation placeholder="From City or port" />
            </div>
          </Section>

          <Section>
            <TextPrimary>Cargo Details</TextPrimary>
          </Section>
        </div>
      </Container>
    </>
  );
};

export default Bookings;
