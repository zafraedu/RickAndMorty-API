const Page = ({ page, setPage }) => {
  const backPage = () => {
    if (page > 1 && page <= 42) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page >= 0 && page < 42) {
      setPage(page + 1);
    }
  };
  return (
    <nav className="pages">
      <button className="backPage" onClick={() => backPage()}>
        Back
      </button>
      <h2>{page}</h2>
      <button className="nextPage" onClick={() => nextPage()}>
        Next
      </button>
    </nav>
  );
};
export default Page;
