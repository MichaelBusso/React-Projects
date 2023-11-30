import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Register = () => {

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
            alert('Registeration was successful!')
        }
        else {
            alert('User name not available!')
        }
    }

    const fetchUsers = async (name) => {
        const response = await fetch(`http://localhost:3500/users?username=${name}`);
        const user = await response.json();
        return user;
    }

    return (
        <div className='Form'>
            <div className='titel'>Register</div>
            <div className='inputs'>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <input type="text" placeholder='User Name...' {...register('name')} />
                    <input type="password" placeholder='Password...' {...register('password')} />
                    <input type="password" placeholder='Confirm Password...' {...register('confirmPassword')} />
                    <input type="submit" id='submit' />
                </form>
            </div>
        </div>
    )
}

export default Register;