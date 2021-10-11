import React from 'react';
import { ToggleButton } from '../../components/ToggleButton';
import { ArrowLeftIcon, ErrorIcon } from '../../assets/icons';
import Navigation from '../../components/Navigation';
import {
  InputDate,
  InputLabel,
  InputSelect,
  InputText,
  InputLocation,
} from '../../components/Input';

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
  DimensionsCard,
} from './styles';

const Bookings: React.FC = () => {
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
              <div className="card--wrapper__item">
                <CardPlane>
                  <p>Air Freight</p>
                </CardPlane>
                <Card>
                  <p>Sea Freight</p>
                </Card>
              </div>
              <div className="card--wrapper__item">
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
            </div>
          </Section>

          <Section>
            <div className="alert-wrapper">
              <ErrorIcon />
            </div>
            <div className="input--wrapper">
              <div className="input--card">
                <div className="import">Import</div>
                <div className="input--card__export">Export</div>
              </div>
              <div className="input--location__from">
                <InputLocation placeholder="From City or port" />
              </div>

              <div className="input--location__to">
                <InputLocation placeholder="To City or port" />
              </div>
            </div>

            <div className="input--wrapper mt-3">
              <div className="input__date">
                <InputDate />
              </div>

              <div className="input__incoterms">
                <InputSelect />
              </div>

              <div className="input__cargo">
                <InputText placeholder="Total Cargo Value" />
              </div>
            </div>
          </Section>

          <Section>
            <div className="cargo--header">
              <TextPrimary>Cargo Details</TextPrimary>
              <div className="cargo--toggle__btn">
                <ToggleButton />

                <TextSecondary>
                  Dangerous Cargo (ex. Chemicals, Battery)
                </TextSecondary>
              </div>
            </div>

            <div className="cargo--dimensions">
              <DimensionsCard>
                <div className="card-total">Total Dimensions</div>
                Package Details
              </DimensionsCard>
            </div>
            <div className="cargo--dimensions">
              <InputLabel label="Total Volume" unit="cbm" />
              <InputLabel label="Total Weight" unit="kg" />
            </div>
          </Section>

          <Section>
            <TextPrimary>Additional Services</TextPrimary>

            <div className="services mt-3">
              <div className="services__item">
                <ToggleButton />
                <div>
                  <TextPrimary>Exporting Forwarding</TextPrimary>
                  <TextTertiary>
                    We handle customs clearance and documentation.
                  </TextTertiary>
                </div>
              </div>
              <div className="services__item">
                <ToggleButton />

                <div>
                  <TextPrimary>Import Customs Clearance</TextPrimary>
                  <TextTertiary>
                    We handle import customs and regulatory requirements.
                  </TextTertiary>
                </div>
              </div>
            </div>
            <div className="services mt-3">
              <div className="services__item">
                <ToggleButton />
                <div>
                  <TextPrimary>Cargo Insurance</TextPrimary>
                  <TextTertiary>
                    We handle cargo from logistics risk up to its full value.
                  </TextTertiary>
                </div>
              </div>
              <div className="services__item">
                <ToggleButton />

                <div>
                  <TextPrimary>Transport /Delivery</TextPrimary>
                  <TextTertiary>
                    We deliver the cargo to your door steps from the ports.
                  </TextTertiary>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Container>
    </>
  );
};

export default Bookings;
