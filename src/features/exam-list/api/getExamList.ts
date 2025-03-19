export const getExamList = async (total: boolean = false) => {
  const response = await fetch(
    `${import.meta.env.VITE_EXAMLIST_SERVICE}/api/v1/pdaotao/scraping/examlist${total ? `?total=${total}` : ""}`,
    {
      credentials: "include",
    }
  );
  const data = await response.json();
  return data;
}


