import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const RegisterCompletion = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        address: yup.object().shape({
            street: yup.string().required('Street is required'),
            suite: yup.string(),
            city: yup.string(),
            zipcode: yup.string(),
        }),
        phone: yup.string(),
        company: yup.object().shape({
            name: yup.string(),
            catchPhrase: yup.string(),
            bs: yup.string(),
        }),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const submitHandler = (formObj) => {
        console.log(formObj);
    }

    return (
        <div className='Form'>
            <div className='titel'>Sign Up</div>
            <div className='inputs'>
                <form onSubmit={handleSubmit(submitHandler)}>

                    <input type="text" placeholder='Name...' {...register('name')} />
                    <input type="text" placeholder='Email...' {...register('email')} />
                    <input type="text" placeholder='Street...' {...register('address.street')} />
                    <input type="text" placeholder='Suit...' {...register('address.suit')} />
                    <input type="text" placeholder='City...' {...register('address.city')} />
                    <input type="text" placeholder='Zipcode...' {...register('address.zipcode')} />
                    <input type="text" placeholder='Phone...' {...register('phone')} />
                    <input type="text" placeholder='Name...' {...register('company.name')} />
                    <input type="text" placeholder='Catch Phrase...' {...register('company.catchPhrase')} />
                    <input type="text" placeholder='bs...' {...register('company.bs')} />


                    <input type="submit" id='submit' />
                </form>
            </div>
        </div>
    )
}

export default RegisterCompletion;