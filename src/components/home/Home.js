import React from 'react';
import ReactDelayRender from 'react-delay-render';
import { Link } from 'react-router-dom';
import Layout from "../layout/Layout.js";

const render = () => {
    <h1>Loading!!</h1>
  };

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpacxhxzjkczckjjsik!</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default ReactDelayRender({ delay: 100, onRender: render })(Home);