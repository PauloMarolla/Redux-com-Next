import { useCallback, useEffect, useState } from 'react';
import Repository from '../../components/Repository';
import Title from '../../components/Title';
import { api } from '../../services/api';
import { IRepository } from '../../types/repositories';

const RepositoriesPage: React.FC = () => {
	const [repositories, setRepositories] = useState<IRepository[]>([]);

	const getRepositories = useCallback(async () => {
		try {
			const response = await api.get(`/users/PauloMarolla/repos`);
			console.log(response.data);

			setRepositories(response.data);
		} catch (error) {
			console.log('erro da requisicao');
		}
	}, []);

	useEffect(() => {
		getRepositories();
	}, []);

	return (
		<>
			<Title>Lista de Repositories</Title>
			<div>
				{repositories.map((repository) => {
					return <Repository repository={repository} key={repository.id} />;
				})}
			</div>
		</>
	);
};

export default RepositoriesPage;
