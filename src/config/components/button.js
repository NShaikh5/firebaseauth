import { Button } from "@material-ui/core";

function Buttonf(props){
    const {label, onClick} = props;
    return <>

    <Button onClick={onClick} variant="content" label={label}>SIGNUP</Button>

    </>
}
export default Buttonf;