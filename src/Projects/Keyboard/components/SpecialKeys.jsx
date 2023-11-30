import Key from "./Key";

const SpacialKeys = ({ props, language, setLanguage, upper, setUpper }) => {

    let specialActions = [
        {
            action: () => setLanguage(!language),
            value: !language ? "English" : "עברית"
        },
        {
            action: () => props.onDataChange((e) => e.slice(0, -1)),
            value: !language ? 'מחק' : 'Delete'
        },
        {
            action: () => props.onDataChange((e) => e.slice(0, 0)),
            value: !language ? 'מחק הכל' : 'Delete All'
        },
        {
            action: () => props.onStyleChange(props.currentStyle === 'red' ? 'blue' : 'red'),
            value: props.currentStyle === 'blue' ? !language ? 'כחול' : 'blue' : !language ? 'אדום' : 'red'
        },
        {
            action: () => setUpper(!upper),
            value: 'CapsLock'
        },
        {
            action: () => props.onDataChange((e) => e.map(item => ({ ...item, value: item.value.toUpperCase() }))),
            value: 'UpperAll'
        },
        {
            action: () => props.onDataChange((e) => e.map(item => ({ ...item, value: item.value.toLowerCase() }))),
            value: 'lowerAll'
        },
        {
            action: () => props.onDataChange((e) => e.map(item => ({ ...item, color: props.currentStyle === 'blue' ? 'blue' : 'red' }))),
            value: 'Color All'
        }
    ];

    return (
        <div className='special'>
            {specialActions.map((item) => (
                <Key
                    value={item.value}
                    func={item.action}
                />
            ))}
        </div>
    )
}

export default SpacialKeys;