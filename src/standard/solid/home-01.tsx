import React from "react";
const Home_01: React.FC<
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
        d="M13.577 2.189a2.75 2.75 0 0 0-3.154 0L2.63 7.641a2.75 2.75 0 0 0-1.123 2.773L3.45 20.52a2.75 2.75 0 0 0 2.7 2.23h11.697a2.75 2.75 0 0 0 2.7-2.23l1.944-10.105a2.75 2.75 0 0 0-1.124-2.773zM9.614 16.21a1 1 0 1 0-1.228 1.578C9.364 18.551 10.63 19 12 19s2.636-.45 3.614-1.21a1 1 0 0 0-1.228-1.579c-.621.483-1.454.79-2.386.79s-1.765-.307-2.386-.79"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_01;
