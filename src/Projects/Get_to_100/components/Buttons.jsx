import Button from "./Button";

const Buttons = ({ currentNumber, doSomeAction }) => {

    const didntReach100 = [
        {
            action: () => doSomeAction((num) => num + 1),
            value: '+ 1'
        },
        {
            action: () => doSomeAction((num) => num - 1),
            value: '- 1'
        },
        {
            action: () => doSomeAction((num) => num * 2),
            value: '* 2'
        },
        {
            action: () => doSomeAction((num) => Math.floor(num / 2)),
            value: '/ 2'
        }
    ];

    return currentNumber === 10 ? (
        <h2>Wait for the end of the game to join the next round!</h2>
    ) : (
        didntReach100.map((item, index) => (
            <Button
                action={item.action}
                value={item.value}
                key={index}
            />
        ))
    )
}

export default Buttons;