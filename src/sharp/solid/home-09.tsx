import React from "react";
const Home_09: React.FC<
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
        d="M21.75 7.924 12 1.424l-9.75 6.5v14.651h6l.004-8.325h7.496v8.325h6z"
      />
      <path fill="currentColor" d="M14.25 22.575V15.75H9.753l-.003 6.825z" />
    </svg>
  );
};
export default Home_09;
