import React from "react";
const Home_13: React.FC<
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
        d="M13.577 2.247a2.75 2.75 0 0 0-3.154 0L2.225 7.985a2.287 2.287 0 0 0 .757 4.092l.325.081L4.322 22.25h15.356l1.015-10.092.325-.08a2.287 2.287 0 0 0 .757-4.093zM12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_13;
