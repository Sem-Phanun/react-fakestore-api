import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-0">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="overflow-hidden rounded-lg shadow-lg sm:rounded-none sm:shadow-none md:h-auto">
              <img
                src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-11371.jpg?size=626&ext=jpg&ga=GA1.1.691160924.1707410118&semt=ais"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32 xl:py-64">
              <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
                Page not found
              </h1>

              <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>

              <Link
                to="/"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
