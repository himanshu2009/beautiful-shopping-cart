import { NavLink } from "react-router-dom";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setloading] = useState(false);
  const [post, setPost] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setloading(true);

    try {
      const res = await fetch(API_URL);

      const data = await res.json();
      console.log(data);

      setPost(data);
    } catch (error) {
      console.log("error aaya ji");
      setPost([]);
    }

    setloading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length > 0 ? (
        <div className="grid  xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {post.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
