import React from "react";
const Router_02: React.FC<
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
        d="M4 13.25A2.75 2.75 0 0 0 1.25 16v4A2.75 2.75 0 0 0 4 22.75h16A2.75 2.75 0 0 0 22.75 20v-4A2.75 2.75 0 0 0 20 13.25zM6 17a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.996 0a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2zm3.995 0a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2zM2.702 10.631C1.639 9.325 1 7.735 1 6.005c0-1.734.644-3.33 1.712-4.638a1 1 0 1 1 1.55 1.266C3.45 3.626 3 4.783 3 6.005c0 1.219.447 2.372 1.253 3.364a1 1 0 0 1-1.551 1.262m2.442-1.929a5.1 5.1 0 0 1-.783-2.697c0-.984.29-1.906.79-2.708A1 1 0 1 1 6.85 4.355a3.1 3.1 0 0 0-.488 1.65c0 .58.168 1.135.483 1.643a1 1 0 1 1-1.7 1.054"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 5.5A1.5 1.5 0 1 1 10 6.618V14a1 1 0 1 1-2 0V6.618A1.5 1.5 0 0 1 7.5 5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Router_02;
