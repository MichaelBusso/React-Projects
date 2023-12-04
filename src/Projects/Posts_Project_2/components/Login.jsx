import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './components style/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required('Your name is required!'),
        password: yup.string().min(4, 'The password should be at last 4 characters').required('Password required!'),
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const submitHandler = async (formObj) => {
        const user = await fetchUsers(formObj.name, formObj.password);
        if (user.length > 0) {
            alert('WELCOME!');
            navigate(`/Home/${user[0].id}`);
            localStorage.setItem('activeUser', JSON.stringify(user));
        }
        else {
            alert('Acess denied! \nPlease check the user name and password again');
        }
    }

    const fetchUsers = async (name, password) => {
        const response = await fetch(`http://localhost:3500/users?username=${name}&website=${password}`);
        const user = await response.json();
        return user;
    }

    return (
        <div className='form_container_login'>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit(submitHandler)} className='form_login'>
                <div className='inputs_login' >
                    <input type="text" placeholder="Name..." {...register("name")} />
                    <input type="text" placeholder="Password..." {...register("password")} />
                </div>
                <div className='btn_login'>
                    <input type="submit" value='Login' />
                </div >
                <button className='btn_register_login' onClick={() => navigate('/Register')}>Sign-Up</button>
            </form>
        </div>
    )
}

export default Login;