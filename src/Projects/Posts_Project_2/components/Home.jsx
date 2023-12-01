import './components style/Home.css';

const Home = () => {

    const buttons = ['Info', 'Todos', 'Posts', 'Albums', 'Logout'];
    const user = JSON.parse(localStorage.getItem('activeUser'));

    return (
        <div className='container'>
            <h1>Hello dear {user[0].name}!</h1>
            <div className='body'>
                {buttons.map((btn) => <button className='btn'>{btn}</button>)}
            </div>
        </div>
    )
}

export default Home;