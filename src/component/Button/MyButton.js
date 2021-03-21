import '../Button/button.css'
const MyButton = (props) => {

    const turnButton = () => {
        if (props.eventOn) {
            return props.onUserClick;
        }
        return
    }

    return (
        <button className="btn" onClick={turnButton()}>{props.myValue}</button>
    )
}

export default MyButton;