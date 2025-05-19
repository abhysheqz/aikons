import React from "react";
const ServerStack_02: React.FC<
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
        d="M13 18.25v1.5h7v2H4v-2h7v-1.5zM2.25 10.25h19.5v6.5H2.25zm3 2.5h1.51v1.5H5.25zm4.51 0H8.25v1.5h1.51zM2.25 2.25h19.5v6.5H2.25zm3 2.5h1.51v1.5H5.25zm4.51 0H8.25v1.5h1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ServerStack_02;
