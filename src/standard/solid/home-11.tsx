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
        fillRule="evenodd"
        d="M10.298 2.387a2.75 2.75 0 0 1 3.405 0l7 5.519a2.75 2.75 0 0 1 1.047 2.16V20A2.75 2.75 0 0 1 19 22.75h-3A1.75 1.75 0 0 1 14.25 21v-4c0-.69-.56-1.25-1.25-1.25h-1.998c-.69 0-1.25.56-1.25 1.25L9.75 21A1.75 1.75 0 0 1 8 22.751H5A2.75 2.75 0 0 1 2.25 20v-9.936a2.75 2.75 0 0 1 1.047-2.16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_11;
