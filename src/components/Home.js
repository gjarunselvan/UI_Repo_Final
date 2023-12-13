import React, { useState, useEffect } from "react";

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Generate a random number between 1 and 90
    const randomId = Math.floor(Math.random() * 90) + 1;
    const Capstone = `http://proddetails.eastus.cloudapp.azure.com:3000/?id=${randomId}`;

    setContent(
      <iframe
        title="Capstone"
        src={Capstone}
        width="100%"
        height="1350px"
        allowFullScreen
        frameBorder="0"
      />
    );
  }, []);

  return (
    <div className="">
      <header className=""></header>
      {content}
    </div>
  );
};

export default Home;
