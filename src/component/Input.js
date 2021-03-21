const MyInput = (props) => {
    return (
        <input onKeyDown={props.inputKeyDown} onChange={props.onChange} value={props.inputValue} style={{ visibility: props.inputDisplay }} ></input>
    )
}

export default MyInput;