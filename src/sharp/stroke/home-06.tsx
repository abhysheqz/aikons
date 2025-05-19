import React from "react";
const Home_06: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M19.5 10v11h-15V10" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.5 11H21l-9-8-9 8h1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 16h.009"
      />
    </svg>
  );
};
export default Home_06;
