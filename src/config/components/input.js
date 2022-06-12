import { TextField } from "@material-ui/core";

function InputF(props) {
    const {label, type, required, value, onChange} = props;
    return <>
    <TextField id="outlined-basic" type={type} label={label} required={required } value={value} onChange={onChange} variant="standard" />
    </>
}

export default InputF;