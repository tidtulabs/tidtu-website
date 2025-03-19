export const getLinkDowExamList = async (id: string) => {
	const response = await fetch(
		`${import.meta.env.VITE_DOWNLOAD_SERVICE}/api/v1/pdaotao/scraping/examlist/${id}`,
		{
			credentials: "include",
		},
	);
	const data = await response.json();
	return data;
};
