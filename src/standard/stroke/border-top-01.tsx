import React from "react";
const BorderTop_01: React.FC<
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
        d="M2.5 6.5v-1a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v1M2.5 10v4m19 0v-4m0 7.75v.75a3 3 0 0 1-3 3h-.75m-7.75 0h4m-7.75 0H5.5a3 3 0 0 1-3-3v-.75M12 2.5v1.9m0 15.2v1.9M9.15 12h5.7m4.75 0h1.9m-19 0h1.9M12 9.15v5.7"
      />
    </svg>
  );
};
export default BorderTop_01;
