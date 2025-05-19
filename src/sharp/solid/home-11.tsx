import React from "react";
const Home_11: React.FC<
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
        d="M15 15H9v7.75H2.25v-15L12 1.25l9.75 6.5v15H15z"
      />
    </svg>
  );
};
export default Home_11;
