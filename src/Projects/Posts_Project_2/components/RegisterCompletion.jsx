import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import apiRequest from './apiRequest';
import './components style/RegisterCompletion.css';
import { useNavigate, useParams } from 'react-router-dom';

const RegisterCompletion = () => {

    const navigate = useNavigate();
    const { name, password } = useParams();

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.object().shape({
            street: yup.string().required(),
            suite: yup.string(),
            city: yup.string().required(),
            zipcode: yup.string().required(),
            geo: yup.object().shape({
                lat: yup.string(),
                lng: yup.string(),
            }),
        }),
        phone: yup.string().required(),
        company: yup.object().shape({
            name: yup.string(),
            catchPhrase: yup.string(),
            bs: yup.string(),
        }),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const addUser = async (user) => {
        const newUser = { ...user, username: name, website: password };
        const postOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        await apiRequest(`http://localhost:3500/users`, postOption);
        navToHome();
    };

    const navToHome = async () => {
        const response = await fetch(`http://localhost:3500/users?username=${name}`);
        const user = await response.json();
        navigate(`/Home/${user[0].id}`);
        localStorage.setItem('activeUser', JSON.stringify(user));
    };

    const submitHandler = (formObj) => {
        addUser(formObj);
    };

    return (
        <div className='form_container_registerCompltion'>
            <h1>Completion of registration</h1>
            <form onSubmit={handleSubmit(submitHandler)} className='form_registerCompltion'>
                <div className='inputs_registerCompltion'>
                    <input type="text" placeholder='Name...' {...register('name')} />
                    <input type="text" placeholder='Email...' {...register('email')} />
                    <input type="text" placeholder='Street...' {...register('address.street')} />
                    <input type="text" placeholder='Suit...' {...register('address.suit')} />
                    <input type="text" placeholder='City...' {...register('address.city')} />
                    <input type="text" placeholder='Zipcode...' {...register('address.zipcode')} />
                    <input type="text" placeholder='Lat...' {...register('address.geo.lat')} />
                    <input type="text" placeholder='Lng...' {...register('address.geo.lng')} />
                    <input type="text" placeholder='Phone...' {...register('phone')} />
                    <input type="text" placeholder='Name...' {...register('company.name')} />
                    <input type="text" placeholder='Catch Phrase...' {...register('company.catchPhrase')} />
                    <input type="text" placeholder='bs...' {...register('company.bs')} />
                </div>
                <div className='btn_registerCompltion'>
                    <input type="submit" id='submit' value='Complete my registration' />
                </div>
            </form>
        </div>
    );
}

export default RegisterCompletion;