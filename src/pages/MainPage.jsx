/* eslint-disable react/prop-types */
import Search from "../components/Search";
import Footer from "../components/Footer";

function MainPage({ setQuery, query }) {
  return (
    <>
      <section>
        <div className="mainpage1">
          <div className="titlecontainer">
            <img src="src\assets\cart.png" />
            <img src="src\assets\name.png" />
            <p>A web app to find more sustainable choices to your food.</p>
          </div>
        </div>
        <div className="searchcontainer">
          <Search setQuery={setQuery} query={query} />
        </div>

        <div className="mainpage2"></div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}

export default MainPage;