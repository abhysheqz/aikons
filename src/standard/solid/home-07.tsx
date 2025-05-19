import React from "react";
const Home_07: React.FC<
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
        d="M10.298 2.387a2.75 2.75 0 0 1 3.405 0l7 5.519a2.75 2.75 0 0 1 1.047 2.16V20A2.75 2.75 0 0 1 19 22.75H5A2.75 2.75 0 0 1 2.25 20v-9.935a2.75 2.75 0 0 1 1.047-2.16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_07;
