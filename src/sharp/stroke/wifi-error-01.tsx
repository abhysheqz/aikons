import React from "react";
const WifiError_01: React.FC<
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
        d="m12 11 .643-.386a.75.75 0 0 0-1.286 0zm6 10v.75a.75.75 0 0 0 .643-1.136zM6 21l-.643-.386A.75.75 0 0 0 6 21.75zm5.357-9.614 6 10 1.286-.772-6-10zM18 20.25H6v1.5h12zM6.643 21.386l6-10-1.286-.772-6 10z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18.5h.009m-.009-3v1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 10c-3.768-3.333-9-3.333-13 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7c6.316-5.333 13.684-5.333 20 0"
      />
    </svg>
  );
};
export default WifiError_01;
