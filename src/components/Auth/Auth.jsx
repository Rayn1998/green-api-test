import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from 'redux/slices/userSlice';

import api from 'utils/Api';

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  const setSubmit = (data) => {
    api.getAccountCondition(data)
      .then(res => {
        if (res.stateInstance === 'authorized') {
          localStorage.setItem('userData', JSON.stringify(data));
          dispatch(setUser(data));
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }
	return (
		<div className='auth'>
			<form className='auth-form' onSubmit={handleSubmit(setSubmit)}>
				<div className='auth-form__input-block'>
					<p className='auth-form__input-name'>idInstance</p>
					<input
						className='auth-form__input'
						{...register('idInstance', {
							required: 'idInstance is required',
						})}
						placeholder='Enter the idInstance...'
					/>
          {errors.idInstance && <p className='auth-form__error'>{errors.idInstance.message}</p>}
				</div>
				<div className='auth-form__input-block'>
					<p className='auth-form__input-name'>apiTokenInstance</p>
					<input
						className='auth-form__input'
						{...register('apiTokenInstance', {
							required: 'apiTokenInstance is required',
						})}
						placeholder='Enter the apiTokenInstance...'
					/>
          {errors.apiTokenInstance && <p className='auth-form__error'>{errors.apiTokenInstance.message}</p>}
				</div>
				<button className='auth-form__button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Auth;
