import React from "react";
const SortingAz_02: React.FC<
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
        d="M3.5 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v.5a1 1 0 0 1-.232.64L6.218 20H9.5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 .232-.64L7.782 15H4.5a1 1 0 0 1-1-1M5.567 2.641A1 1 0 0 1 6.5 2h1a1 1 0 0 1 .934.641l2.5 6.5a1 1 0 1 1-1.867.718L7 4.486 4.934 9.859a1 1 0 1 1-1.867-.718zM17 3a1 1 0 0 1 1 1v12h2a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 14 16h2V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingAz_02;
