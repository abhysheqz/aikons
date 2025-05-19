import React from "react";
const Blogger: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3zM10 9.5h1M10 14.5h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.993 17.512V6.488h6.993a.01.01 0 0 1 .01.01v4.52h2.992a.01.01 0 0 1 .01.01v6.474a.01.01 0 0 1-.01.01z"
      />
    </svg>
  );
};
export default Blogger;
