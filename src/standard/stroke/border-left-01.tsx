import React from "react";
const BorderLeft_01: React.FC<
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
        d="M6.5 2h-1a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h1M10 2h4m-4 19h4m3.75 0h.75a3 3 0 0 0 3-3v-.75m0-7.75v4m0-7.75V5a3 3 0 0 0-3-3h-.75M12 2v1.9m0 15.2V21m-2.85-9.5h5.7m4.75 0h1.9m-19 0h1.9M12 8.65v5.7"
      />
    </svg>
  );
};
export default BorderLeft_01;
