import './components style/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const buttons = ['Info', 'Todos', 'Posts', 'Albums', 'Log-out'];
    const user = JSON.parse(localStorage.getItem('activeUser'));

    const navHandler = (target) => {
        if (target === 'Log-out') {
            navigate('/');
            localStorage.removeItem('activeUser');
        }
        else if (target === 'Info') {
            console.log(user);
            alert(user[0]);
        }
        else {
            navigate(`/Home/${user[0].id}/${target}`);
        }
    }

    return (
        <div>
            <div className='container'>
                <h1>Hello dear {user[0].name}!</h1>
                <div className='body'>
                    {buttons.map((btn) => <div onClick={() => navHandler(btn)} className={`btn ${btn}`}>{btn}</div>)}
                </div>
            </div>
        </div>
    )
}

export default Home;