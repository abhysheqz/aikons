import React from "react";
const CursorProgress_04: React.FC<
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
        d="m2.6 2.03 15.118 5.815a.44.44 0 0 1-.02.83L11.14 10.86a.44.44 0 0 0-.28.278L8.675 17.7a.44.44 0 0 1-.83.018L2.03 2.6a.44.44 0 0 1 .57-.57Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 13s-1 .818-1 2.454 2 2.455 2 4.092-1 2.454-1 2.454m0-9a4.5 4.5 0 0 0-4.5 4.5m4.5-4.5a4.5 4.5 0 0 1 4.5 4.5M17.5 22a4.5 4.5 0 0 0 4.5-4.5M17.5 22a4.5 4.5 0 0 1-4.5-4.5m9 0s-.818-1-2.454-1-2.455 2-4.091 2-2.455-1-2.455-1"
      />
    </svg>
  );
};
export default CursorProgress_04;
