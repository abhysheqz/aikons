import React from "react";
const Diaper: React.FC<
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
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75V7h-5.25a.75.75 0 0 0 0 1.5h5.25v1.25q0 .378-.026.75H21.25a7.75 7.75 0 0 0-7.75 7.75v2.108a10.8 10.8 0 0 1-3.501 0V18.25a7.75 7.75 0 0 0-7.75-7.75H1.026A11 11 0 0 1 1 9.75V8.5h5.25a.75.75 0 0 0 0-1.5H1zM1.236 12a10.77 10.77 0 0 0 7.263 8v-1.75A6.25 6.25 0 0 0 2.249 12zm20.014 0h1.014A10.77 10.77 0 0 1 15 20v-1.75A6.25 6.25 0 0 1 21.25 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Diaper;
