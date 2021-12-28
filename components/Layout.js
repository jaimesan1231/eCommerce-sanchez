import React from "react";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            font-family: roboto, sans-serif;
            box-sizing: border-box;
          }
          body {
            background-color: #f4f2f2;
          }
          ul {
            list-style: none;
          }
          :root {
            --primary-color: #f7941d;
            --header-color: #333333;
            --header-height: 60px;
            --gray: #cccccc;
          }
        `}
      </style>
    </>
  );
}

export default Layout;
