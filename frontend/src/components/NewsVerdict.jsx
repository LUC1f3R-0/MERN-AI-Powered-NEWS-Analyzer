import React from 'react';
import '../App.css'

const NewsVerdict = ({ htmlOutput }) => {
  return (
    <div
      className="bg-white p-4 rounded shadow"
      dangerouslySetInnerHTML={{ __html: htmlOutput }}
    />
  );
};

export default NewsVerdict;