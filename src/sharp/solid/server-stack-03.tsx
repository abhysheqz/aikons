import React from "react";
const ServerStack_03: React.FC<
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
        d="M2.25 2.25h19.5v5.5H2.25zm3 2h1.51v1.5H5.25zm4.51 0H8.25v1.5h1.51zM2.25 9.25h19.5v5.5H2.25zm3 2h1.51v1.5H5.25zm4.51 0H8.25v1.5h1.51zM2.25 16.25h19.5v5.5H2.25zm3 2h1.51v1.5H5.25zm4.51 0H8.25v1.5h1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ServerStack_03;
