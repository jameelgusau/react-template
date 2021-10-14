import React from 'react';

import Layout from '../layout/Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <h2 >Dynamic Page</h2>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;