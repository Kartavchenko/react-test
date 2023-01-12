import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../fetchApi/fetch";
import BasicModal from "../components/ModalProduct";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const ProductCard = () => {
  const [products, setProducts] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchCardProduct = async () => {
      try {
        const { data } = await getProduct(productId);
        setProducts(data);
      } catch (error) {
        Notify.failure("No such params");
      }
    };
    fetchCardProduct();
  }, [productId]);

  return <BasicModal products={products} />;
};

export default ProductCard;
