import { Container, FormLabel } from './styles';
import { CalenderFillIcon } from '../../assets/icons';

type InputProp = {
  placeholder?: string;
  label?: string;
  unit?: string;
};

export const InputLocation: React.FC<InputProp> = ({ placeholder }) => {
  return (
    <Container>
      <span className="icon">
        <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="location--input"
      />
    </Container>
  );
};

export const InputDate: React.FC = () => {
  return (
    <Container>
      <span className="dateicon--wrapper">
        <CalenderFillIcon className="date--icon" />
      </span>
      <input
        type="text"
        className="location--inpu date-picker"
        placeholder="Ready Date"
      />
    </Container>
  );
};

export const InputText: React.FC<InputProp> = ({ placeholder }) => {
  return (
    <Container>
      <input
        type="text"
        className="location--input"
        placeholder={placeholder}
      />
    </Container>
  );
};
export const InputSelect: React.FC = () => {
  return (
    <Container>
      <select className="location--input select" defaultValue={'Incoterms'}>
        <option value="Incoterms" disabled>
          Incoterms
        </option>
        <option>Incoterms</option>
        <option> Incoterms</option>
      </select>
    </Container>
  );
};

export const InputLabel: React.FC<InputProp> = ({ label, unit }) => {
  return (
    <FormLabel>
      <input type="text" className="labelInput" id={label} />

      <label className="label" htmlFor={label}>
        {label}
      </label>
      <span className="unit">{unit}</span>
    </FormLabel>
  );
};
