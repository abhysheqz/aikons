import React from "react";
const Home_08: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m21 8-9-6-9 6v14h18z" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 16.5h2v2m-2-2v2h2m-2-2 2 2"
      />
    </svg>
  );
};
export default Home_08;
