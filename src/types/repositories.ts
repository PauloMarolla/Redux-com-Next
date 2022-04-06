export type IRepository = {
	id: number;
	name: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	created_at: string;
};
