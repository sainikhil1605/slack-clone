import { TextField } from "@material-ui/core";

const FormInput = (props) => {
  const { placeholder, variant, InputProps, ...otherProps } = props;
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      InputProps={{
        ...InputProps,
      }}
      {...otherProps}
    />
  );
};
export default FormInput;
