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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m9 22 .003-7H15v7"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m21 8-9-6-9 6v14h18z" />
    </svg>
  );
};
export default Home_09;
