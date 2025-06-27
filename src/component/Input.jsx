function Input(props){
    return(
        <>
        <input type="text" className="display" value={props.clickedKey} readOnly></input>
        </>
    );
}
export default Input;