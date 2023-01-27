const TheBaseButton = ({ type = 'button', buttonText = 'Button', onClick }) => {
    return (
        <button onClick={onClick} type={type} > { buttonText } </button>
    )
}

export default TheBaseButton;