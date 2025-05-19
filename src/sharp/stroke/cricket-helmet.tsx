import React from "react";
const CricketHelmet: React.FC<
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
        d="M21 9.44C19.695 5.663 16.05 3 11.757 3 6.368 3 2 7.281 2 12.562c0 2.941 1.355 5.572 3.487 7.326C6.836 20.998 7 21 7 21h7l-1-8zm0 0 1-.445"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.008 17h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m22 15.911-5.5.589L13 13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 12 1.5 9H22M20.5 16v5"
      />
    </svg>
  );
};
export default CricketHelmet;
