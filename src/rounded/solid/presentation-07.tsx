import React from "react";
const Presentation_07: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0zM11 22v-.494c-.348.01-.458.03-.554.07-.141.059-.275.167-.91.803l-.329.328a1 1 0 1 1-1.414-1.414l.328-.328.098-.098c.48-.481.905-.908 1.461-1.138.411-.17.847-.214 1.32-.226V17h2v2.503c.473.012.909.055 1.32.226.556.23.981.657 1.46 1.137l.099.099.328.328a1 1 0 0 1-1.414 1.414l-.329-.328c-.636-.636-.769-.744-.91-.803-.096-.04-.207-.06-.554-.07V22a1 1 0 1 1-2 0"
      />
      <path
        fill="currentColor"
        d="M1.75 11.607c0 3.132 0 4.697.948 5.67s2.474.973 5.526.973h7.552c3.052 0 4.578 0 5.526-.973s.948-2.538.948-5.67V9.393c0-3.132 0-4.697-.948-5.67s-2.474-.973-5.526-.973H8.224c-3.052 0-4.578 0-5.526.973S1.75 6.26 1.75 9.393z"
      />
    </svg>
  );
};
export default Presentation_07;
