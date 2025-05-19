import React from "react";
const Logout_05: React.FC<
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
        d="M6.667 7.245C5.008 8.73 4 10.656 4 13a8 8 0 0 0 16 0c0-2.344-1.008-4.27-2.667-5.755l1.334-1.49C20.69 7.566 22 10.013 22 13c0 5.523-4.477 10-10 10S2 18.523 2 13c0-2.987 1.31-5.434 3.333-7.245z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 1 3.707 3.707-1.414 1.415L13 4.829v7.585h-2V4.83L9.707 6.122 8.293 4.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Logout_05;
