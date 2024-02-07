import { Link } from "react-router-dom";

const ProductCard = ({ products =[] }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-20 mx-auto">
          <div className="flex flex-wrap item-center justify-center -m-6">
            {products.map((item, index) => {
                const { id } = item
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 m-2" key={index}>
                  <Link to={`/product/${id}`} className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={item.title}
                      className="object-contain object-center w-full h-full block"
                      src={item.image}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
