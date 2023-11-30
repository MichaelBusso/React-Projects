import Key from './Key';
import SpacialKeys from './SpecialKeys';
import './components style/keyboard.css';
import { useState } from 'react';

const Keyboard = (props) => {

    const [language, setLanguage] = useState(true);
    const [upper, setUpper] = useState(false)

    const english = "1234567890qwertyuiopasdfghjkl;zxcvbnm,.".split('');
    const hebrew = "1234567890/'קראטוןםפשדגכעיחלךףזסבהנמצתץ".split('');

    return (
        <main>
            <div className='keyboard'>
                {(language ? english : hebrew).map((item) => (
                    <Key
                        value={upper ? item.toUpperCase() : item}
                        func={() => props.onDataChange(upper ? item.toUpperCase() : item)}
                    />
                ))}
                <div className='space'>
                    <Key
                        value={!language ? 'רווח' : 'Space'}
                        func={() => props.onDataChange(" ")}
                    />
                </div>
            </div>
            <div className='special'>
                <SpacialKeys
                    props={props}
                    language={language}
                    setLanguage={setLanguage}
                    upper={upper}
                    setUpper={setUpper}
                />
            </div>
        </main>
    )
}

export default Keyboard;

