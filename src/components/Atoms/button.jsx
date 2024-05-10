import { MoveRight } from "lucide-react";
import PropTypes from "prop-types";
import "./btn.css";

const Button = ({ text, classes }) => {
  return (
    <button type="button" className={classes}>
      {text}
      <MoveRight className="ml-3" size={28} />
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.func.isRequired,
  classes: PropTypes.func.isRequired,
};
export default Button;
