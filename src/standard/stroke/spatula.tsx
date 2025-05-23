import React from "react";
const Spatula: React.FC<
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
        d="m17.5 8.5-2 2m0-4-2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.416 21.603a1.394 1.394 0 0 0 1.959-.01l7.223-7.208a1 1 0 0 1 .953-.261l2.898.736a1 1 0 0 0 .953-.262l4.709-4.709c.543-.543.73-1.35.422-2.055C21.086 6.81 20.355 5.355 19.5 4.5s-2.31-1.586-3.334-2.033c-.704-.308-1.511-.121-2.055.422l-4.71 4.71a1 1 0 0 0-.262.951l.729 2.89a1 1 0 0 1-.26.949l-7.203 7.247a1.383 1.383 0 0 0 .011 1.967Z"
      />
    </svg>
  );
};
export default Spatula;
