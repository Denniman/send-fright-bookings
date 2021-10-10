import { SwitchWrapper } from './styles';

export const ToggleButton = () => {
  return (
    <SwitchWrapper>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </SwitchWrapper>
  );
};
