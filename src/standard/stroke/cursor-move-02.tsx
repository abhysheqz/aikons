import React from "react";
const CursorMove_02: React.FC<
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
        d="M17.5 13v2.5m0-2.5 1.5 1.5M17.5 13 16 14.5m6 3h-2.5m2.5 0L20.5 16m1.5 1.5L20.5 19m-3 3v-2.5m0 2.5 1.5-1.5M17.5 22 16 20.5m-3-3h2.5m-2.5 0 1.5 1.5M13 17.5l1.5-1.5"
      />
    </svg>
  );
};
export default CursorMove_02;
