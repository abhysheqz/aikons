import React from "react";
const Pan_01: React.FC<
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
        strokeWidth={1.5}
        d="M19.803 14.803A7.5 7.5 0 1 1 9.197 4.197a7.5 7.5 0 0 1 10.606 10.606Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.328 12.328a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656ZM7.879 14l-5.44 5.44a1.5 1.5 0 0 0 2.122 2.12L10 16.122"
      />
    </svg>
  );
};
export default Pan_01;
