import './components style/screen.css'
import Pre from './Pre';

const Screen = (props) => {
    return (
        <div className='div'>
            {props.dataToShow.map((obj) => (
                <Pre
                    color={obj.color}
                    value={obj.value}
                />
            )
            )}
        </div>
    )
}

export default Screen;