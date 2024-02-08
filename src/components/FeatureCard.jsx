import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Category
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div className="flex justify-center items-center ml-4">
            {cards.map((item, index) => {
              return (
                <Link to={`categories/${item}`} className="p-4 md:w-1/3" key={index}>
                  <div className="flex rounded-lg h-full w-[260px] bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <h2 className="text-gray-900 text-lg text-center title-font font-medium">
                        {item}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCard;
