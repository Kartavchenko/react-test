import { useEffect, useState } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { getFetch } from "../fetchApi/fetch";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import ProductsList from "../components/ProductsList";
import BasicPagination from "../components/Pagination";
import Filter from "../components/Filter";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [queryId, setQueryId] = useState("");
  const { pageNum } = useParams();
  const pageNumtoNumber = Number(pageNum);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, page, total_pages } = await getFetch(currentPage);
        setCards([...data]);
        setTotalPage(total_pages);
        if (pageNumtoNumber > total_pages) {
          return Notify.failure("Have not that page");
        }
        setCurrentPage(page);
      } catch (error) {
        Notify.failure("No such params");
      }
    };
    fetchProducts();
  }, [currentPage, pageNumtoNumber]);

  const handlePages = (e, p) => {
    setCurrentPage(p);
  };

  const handleFilter = (e) => {
    setQueryId(e.target.value);
  };

  if (!totalPage) {
    return null;
  }

  return (
    <main>
      <div>
        <Filter
          query={queryId}
          handleFilter={handleFilter}
          currentPage={currentPage}
        />
      </div>
      <ProductsList data={cards} currentPage={currentPage} />
      <NavLink to={`/${currentPage}`}>
        <BasicPagination
          defaultPage={1}
          totalPage={totalPage}
          currentPage={currentPage}
          handlePages={handlePages}
        />
      </NavLink>
      <Outlet />
    </main>
  );
};

export default Home;
