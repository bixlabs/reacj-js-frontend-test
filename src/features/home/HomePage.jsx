import React from "react";
import Container from "../../app/layout/Container";
import ServicesList from "../services/ServicesList";

const HomePage = () => {
  return (
    <main role="main">
      <div className="jumbotron">
        <Container>
          <h1 className="display-3">Hello, world!</h1>
          <p>
            This is a template for a simple marketing or informational website.
            It includes a large callout called a jumbotron and three supporting
            pieces of content. Use it as a starting point to create something
            more unique.
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more »
            </a>
          </p>
        </Container>
      </div>

      <Container>
        <ServicesList />
        <hr />
      </Container>
    </main>
  );
};

export default HomePage;
