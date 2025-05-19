import React from "react";
const PoundSend: React.FC<
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
        fillRule="evenodd"
        d="M18.617 9.576a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18 15.5V14h-3a1 1 0 1 1 0-2h3v-1.5a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 5a3.5 3.5 0 1 0 0 7h2a1 1 0 1 1 0 2H8.378c-.186.848-.58 1.838-1.135 2.809-.417.73-.944 1.482-1.583 2.191h6.129a3 3 0 0 0 1.664-.504l.492-.328a1 1 0 0 1 1.11 1.664l-.493.328a5 5 0 0 1-2.773.84H3a1 1 0 0 1-.555-1.832c1.345-.896 2.371-2.143 3.062-3.352A9 9 0 0 0 6.31 14H2.5a1 1 0 1 1 0-2h1.757A5.5 5.5 0 1 1 14 8.5a1 1 0 1 1-2 0A3.5 3.5 0 0 0 8.5 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoundSend;
