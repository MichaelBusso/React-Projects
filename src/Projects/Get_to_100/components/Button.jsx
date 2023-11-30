const Button = ({ action, value }) => {
    
    return (
        <button onClick={action}>{value}</button>
    )
}

export default Button;