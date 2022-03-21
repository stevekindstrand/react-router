import { useParams } from "react-router-dom";

export function Product() {
  let { id } = useParams();
  console.log({id});
  
  return (
    <>
      <div>Product works!</div>
      <div>id: {id}</div>
    </>
  );
}
