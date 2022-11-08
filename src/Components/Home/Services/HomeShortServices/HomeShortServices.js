import React from "react";

const HomeShortServices = () => {
  return (
    <div className="cover">
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-yellow-800 capitalize lg:text-6xl font-extrabold dark:text-white">
            Services
          </h1>

          <p className="mt-4 text-center text-white font-bold ">
           My services is The best , if you try it And gives review ,<br />
            3 Best and Delius Food in this List  ,<br />
            If you like this food, can you visit see all server ,<br />
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

            {/* card  */}
            <div
              className="overflow-hidden bg-cover bg-[url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')] rounded-lg cursor-pointer h-96 group border-2"
              
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-yellow-600/20 group-hover:opacity-100">
                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                  Best website collections
                </h2>
                <p className="mt-2 text-lg tracking-wider text-red-700 uppercase ">
                  Website
                </p>
                <p className="mt-2 text-lg tracking-wider text-white uppercase ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae qui possimus ducimus eligendi, aperiam tempora laboriosam soluta aliquam asperiores praesentium. Nemo adipisci aliquam esse? Expedita distinctio dolorem eos autem id?
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeShortServices;
