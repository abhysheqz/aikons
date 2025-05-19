import React from "react";
const Hdd: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 2H4v20h16z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.8 12.665A4.5 4.5 0 1 0 15.2 6.336a4.5 4.5 0 0 0-6.398 6.329Zm0 0 3.2-3.2M9.5 19h5"
      />
    </svg>
  );
};
export default Hdd;
