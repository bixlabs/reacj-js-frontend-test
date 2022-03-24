import React from "react";
import Container from "../../app/layout/Container";
import ServicesList from "../services/ServicesList";

const HomePage = () => {
  return (
    <main role="main">
      <div className="jumbotron">
        <Container>
          <h1 className="display-3">Services!</h1>
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
