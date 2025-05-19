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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 10.5H2L11.375 3a1 1 0 0 1 1.25 0L22 10.5h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9v10.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M12 17.5v1"
      />
    </svg>
  );
};
export default Home_06;
