import { Container, FormLabel } from './styles';

type InputProp = {
  placeholder?: string;
  label?: string;
};

const InputLocation: React.FC<InputProp> = ({ placeholder }) => {
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
      <input
        type="date"
        className="location--input date-picker"
        value="Ready Date"
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
      <select className="location--input select">
        <option selected disabled>
          Incoterms
        </option>
        <option>Incoterms</option>
        <option> Incoterms</option>
      </select>
    </Container>
  );
};

export const InputLabel: React.FC<InputProp> = ({ label }) => {
  return (
    <FormLabel>
      <input type="text" className="labelInput" id={label} />
      <label className="label" htmlFor={label}>
        {label}
      </label>
    </FormLabel>
  );
};

export default InputLocation;
