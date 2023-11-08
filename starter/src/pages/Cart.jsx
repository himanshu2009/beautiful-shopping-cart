import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex md:flex-row flex-col gap-6 max-w-6xl mx-auto justify-between">
        <div className="">
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} itemIndex={index} />
          ))}
          </div>

          <div className=" flex md:w-[70%] flex-col justify-between items-start py-20 mx-5">
            <div className="flex flex-col items-start">
              <div  className="text-green-800 text-xl font-semibold">Your cart </div>
               <h2 className="text-green-700 text-5xl font-semibold">SUMMARY</h2>
              <p className="text-slate-700 mt-5 text-xl font-semibold">
                <span>Total Items:{cart.length}</span>
              </p>
            </div>

            <div>
              <p className="text-black ">Total Amount: <span className="text-black font-bold ">${totalAmount }</span></p>

              <button className="bg-green-800 text-white font-bold p-2 rounded-md">Checkout Now</button>
            </div>
          </div>
        
        </div>
      ) : (
        <div className="h-[80vh] flex flex-col gap-5 justify-center items-center">
         
          <h1 className="text-slate-700 font-semibold text-xl">Cart is empty</h1>
          <Link to="/">
            <button  className="text-white font-semibold px-10 py-3 text-base bg-green-600 border-2 border-green-600 hover:bg-white hover:text-green-600 transition-colors duration-300 rounded-lg">Shop Now</button>
          </Link>
        
        </div>
      )}
    </div>
  );
};

export default Cart;
