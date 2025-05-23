import React from "react";
const PointingRight_07: React.FC<
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
        d="M11.645 16H13.5a1.5 1.5 0 0 0 1.5-1.5V13m-4 6h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.266M15 13h-2.421M15 13h5a1.5 1.5 0 0 0 0-3H10l2.163-2.308a1.683 1.683 0 0 0-2.26-2.423l-6.48 4.14a2 2 0 0 0-.923 1.685v7.906a3 3 0 0 0 3 3h6a1.5 1.5 0 0 0 1.5-1.5v-1.176M21.5 4.5 19 2m2.5 2.5L19 7m2.5-2.5h-6"
      />
    </svg>
  );
};
export default PointingRight_07;
