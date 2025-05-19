import React from "react";
const Arrange: React.FC<
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
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h2A1.5 1.5 0 0 1 8 4.5v2A1.5 1.5 0 0 1 6.5 8h-2A1.5 1.5 0 0 1 3 6.5zM3 17.5A1.5 1.5 0 0 1 4.5 16h2A1.5 1.5 0 0 1 8 17.5v2A1.5 1.5 0 0 1 6.5 21h-2A1.5 1.5 0 0 1 3 19.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 18.5h13m-5-13H8m8.324 2.176-8.675 8.675"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 4.5A1.5 1.5 0 0 1 17.5 3h2A1.5 1.5 0 0 1 21 4.5v2A1.5 1.5 0 0 1 19.5 8h-2A1.5 1.5 0 0 1 16 6.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 21 1.388-.946C20.463 19.32 21 18.955 21 18.5s-.537-.821-1.612-1.554L18 16"
      />
    </svg>
  );
};
export default Arrange;
