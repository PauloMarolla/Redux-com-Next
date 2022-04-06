import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Title from '../../components/Title';
import { api } from '../../services/api';
import { IRepository } from '../../types/repositories';

const RepositoryPage: React.FC = () => {
	const [repository, setRepository] = useState<null | IRepository>(null);
	const router = useRouter();

	const params = router.query;

	console.log(params);

	const getRepositoryBySlug = useCallback(async () => {
		try {
			const response = await api.get(`/repos/PauloMarolla/${params.slug}`);
			console.log(response.data);

			setRepository(response.data);
		} catch (error) {
			console.log('erro da requisicao');
		}
	}, []);

	useEffect(() => {
		getRepositoryBySlug();
	}, []);

	return (
		<>
			<Title>Param: {params.slug}</Title>
			<h2>{repository?.owner.login}</h2>
			<time>{repository?.created_at}</time>
		</>
	);
};

export default RepositoryPage;
