import React from "react";
const Castle: React.FC<
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
        d="M17.493 4H6.498v3.5h10.995zM14.495 22l-.5-5H9.997l-.5 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.994 7.5H7.997L5.998 22h11.995zM7.997 4V2M11.996 4V2M15.994 4V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.805 12.008h3.63a.1.1 0 0 1 .1.085l1.46 9.9h-4.603M7.186 12H3.555a.1.1 0 0 0-.1.085l-1.459 9.9h4.602"
      />
    </svg>
  );
};
export default Castle;
