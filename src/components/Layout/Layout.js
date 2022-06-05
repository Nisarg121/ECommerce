import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const [isDark, setIsDark] = useState(false);
  const mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; //
  }

  return (
    <>
      <Header isDark={isDark} />
      <button
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
        className="scroll"
      >
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
      {props.children}
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  );
};

export default Layout;
