import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div className="h-[150px]">
        <img src={post.image} alt=""  className="w-full h-full"/>
      </div>

      <div className="flex  justify-evenly gap-2 items-center w-full mt-5 pb-3">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>

      {
        // cart me check karega kya koi
        // productitem present agar honge to remove-item
        // ka button show hoga agar present nahi higa to add to cart ka button show hoga
        cart.some((p) => p.id === post.id) ? (
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white" onClick={addToCart}>Add to cart</button>
        ) 
      }
      </div>
      
    </div>
  );
};

export default Product;
