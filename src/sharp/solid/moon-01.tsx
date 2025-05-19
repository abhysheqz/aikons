import React from "react";
const Moon_01: React.FC<
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
        d="M19 9.75a4.73 4.73 0 0 0 3.178-1.22c.37 1.09.572 2.257.572 3.47 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c1.213 0 2.38.201 3.47.572A4.75 4.75 0 0 0 19 9.75m-2.033-7.286a10.8 10.8 0 0 1 4.569 4.569 3.25 3.25 0 1 1-4.569-4.569M10 7a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2zm-4 7a1 1 0 0 1 1-1h.006a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m6.75 2a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Moon_01;
