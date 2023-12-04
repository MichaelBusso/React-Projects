import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './components style/Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required('Your name is required!'),
        password: yup.string().required('Password required!'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'No Math!')
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const submitHandler = async (formObj) => {
        const user = await fetchUsers(formObj.name);
        if (user.length === 0) {
            navigate(`/RegisterCompltion/:${formObj.name}/:${formObj.password}`);
        }
        else {
            alert('User name not available!');
        }
    }

    const fetchUsers = async (name) => {
        const response = await fetch(`http://localhost:3500/users?username=${name}`);
        const user = await response.json();
        return user;
    }

    return (
        <div className='form_container_register'>
            <h1 >Register</h1>
            <form onSubmit={handleSubmit(submitHandler)} className='form_register'>
                <div className='inputs_register'>
                    <input type="text" placeholder='User Name...' {...register('name')} />
                    <input type="password" placeholder='Password...' {...register('password')} />
                    <input type="password" placeholder='Confirm Password...' {...register('confirmPassword')} />
                </div>
                <div className='btn_register'>
                    <input type="submit" id='submit' value='Register' />
                </div>
            </form>
        </div>
    )
}

export default Register;