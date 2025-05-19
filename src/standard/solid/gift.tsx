import React from "react";
const Gift: React.FC<
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
        d="M5 4.25A3.25 3.25 0 0 1 8.25 1 4.75 4.75 0 0 1 13 5.75V7a1 1 0 0 1-1 1H8.5A3.5 3.5 0 0 1 5 4.5zM8.25 3C7.56 3 7 3.56 7 4.25v.25A1.5 1.5 0 0 0 8.5 6H11v-.25A2.75 2.75 0 0 0 8.25 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 4.25A3.25 3.25 0 0 0 15.75 1 4.75 4.75 0 0 0 11 5.75V7a1 1 0 0 0 1 1h3.5A3.5 3.5 0 0 0 19 4.5zM15.75 3c.69 0 1.25.56 1.25 1.25v.25A1.5 1.5 0 0 1 15.5 6H13v-.25A2.75 2.75 0 0 1 15.75 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.755 7.995c.003-1.002.85-1.745 1.806-1.745h16.883c.959 0 1.806.746 1.806 1.75v2c0 1.004-.847 1.75-1.806 1.75H3.556c-.96 0-1.809-.748-1.806-1.755z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.998 13.25H3.556q-.155 0-.306-.015V20A2.75 2.75 0 0 0 6 22.75h4.998zM12.998 22.75H18A2.75 2.75 0 0 0 20.75 20v-6.765q-.151.015-.306.015h-7.446z"
      />
    </svg>
  );
};
export default Gift;
