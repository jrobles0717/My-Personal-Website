import React from "react";

const TwitterIcon = ({ direction }) => {
  return (
    <a
      href="https://twitter.com/j_robles0717"
      className="icon"
      target="_blank"
      aria-label="Link to my Twitter Profile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        // className="social__icon"
        style={{
          fill: "currentColor",
          width: direction === "column" ? "2.2rem" : "2.6rem",
          height: direction === "column" ? "2.2rem" : "2.6rem",
        }}
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    </a>
  );
};

export default TwitterIcon;
