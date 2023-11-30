import Buttons from "./Buttons";

const Home = () => {

    const user = JSON.parse(localStorage.getItem('activeUser'));

    return (
        <>
            <h1>{user[0].name}</h1>
            <Buttons></Buttons>
        </>
    )
}

export default Home;