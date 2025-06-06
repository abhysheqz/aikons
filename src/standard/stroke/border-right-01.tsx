import React from "react";
const BorderRight_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 2.5h1a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-1M14 2.5h-4m0 19h4m-7.75 0H5.5a3 3 0 0 1-3-3v-.75m0-7.75v4m0-7.75V5.5a3 3 0 0 1 3-3h.75M12 2.5v1.9m0 15.2v1.9M9.15 12h5.7m4.75 0h1.9m-19 0h1.9M12 9.15v5.7"
      />
    </svg>
  );
};
export default BorderRight_01;
