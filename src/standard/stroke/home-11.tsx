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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.002 16.999 9 21.001A1 1 0 0 1 8 22H5a2 2 0 0 1-2-2v-9.935a2 2 0 0 1 .762-1.57l7-5.519a2 2 0 0 1 2.476 0l7 5.518A2 2 0 0 1 21 10.065V20a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-4a2 2 0 0 0-2-2h-1.998a2 2 0 0 0-2 1.999"
      />
    </svg>
  );
};
export default Home_11;
