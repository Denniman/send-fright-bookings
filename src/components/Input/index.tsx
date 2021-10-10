import { Container } from './styles';

type InputProp = {
  placeholder: string;
};

const InputLocation: React.FC<InputProp> = ({ placeholder }) => {
  return (
    <Container>
      <span>
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

export default InputLocation;
