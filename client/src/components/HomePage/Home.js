import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Home = () => (
  <>
    <header>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  ",
        }}
      />

      {/* Background image */}
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")',
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Level Up With iTutor</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Background image */}
    </header>

    <footer className="bg-light text-center text-lg-start">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Javascript</h5>
            <p>
              Learn this dynamic language to make websites more interactive and
              user-friendly.
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">HTML + CSS</h5>
            <p>
              Learn to create the structure and content for a web page along
              with how to design it.
            </p>
          </div>
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Java</h5>
            <p>
              Learn this popular language designed to run code on many different
              platforms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Home;
