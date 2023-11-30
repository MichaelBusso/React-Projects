import Button from "./Button";

const Buttons = () => {
    const options = ['Info', 'Todos', 'Posts', 'Albums', 'Logout'];

    return (
        <>
            {options.map(option => (
                <Button value={option}/>
            ))}
        </>
    )
}

export default Buttons;