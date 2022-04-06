import { IRepository } from '../../types/repositories';
import { Container } from './styles';
import Link from 'next/link';

type RepositoryProps = {
	repository: IRepository;
};
const Repository: React.FC<RepositoryProps> = ({ repository }) => {
	return (
		<Container>
			<Link href={`/repositories/${repository.name}`}>
				<a>
					{repository.name} | {repository.owner.login}
				</a>
			</Link>
		</Container>
	);
};

export default Repository;
