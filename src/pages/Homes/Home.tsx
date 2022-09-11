import HomeProductsDetail from "./HomeProductsDetail";
function Home() {
  return (
    <section className="text-gray-600 body-font flex-center py-8 my-8">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          <HomeProductsDetail />
        </div>
      </div>
    </section>
  );
}

export default Home;
