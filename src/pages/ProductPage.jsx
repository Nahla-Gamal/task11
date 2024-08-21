import { useParams } from "react-router-dom";

function ProductPage() {
    const { id } = useParams();
    return(
      <h1> More details about product {id} </h1>
    )
}

export default ProductPage;