import { StyledPermissionText } from './PermissionText.styled';

const PermissionText = (props) => {
  return <StyledPermissionText>{props.children}</StyledPermissionText>;
};

export default PermissionText;
