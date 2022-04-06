import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/Title';
import { adicionarContador, removerContador } from '../store/counter/actions';
import { AppReducerState } from '../store/store';

const Home: NextPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const state = useSelector((state: AppReducerState) => state);
	const dispatch = useDispatch();

	console.log(state);

	return (
		<div className="center">
			{state.contador}

			<button onClick={() => dispatch(adicionarContador())}>Adicionar</button>
			<button onClick={() => dispatch(removerContador())}>Remover</button>

			<Title>Sign In</Title>

			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<div>
					<label htmlFor="email">E-mail</label>
					<input id="email" type="text" {...register('email')} />
				</div>
				<div>
					<label htmlFor="password">Senha</label>
					<input id="password" type="password" {...register('password')} />
				</div>
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
};

export default Home;
