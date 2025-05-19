import React from "react";
const Dart: React.FC<
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
        d="m19 5 3-3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 19 4.5-1.5L5 22H2z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 6 4 4M7.5 16.5l10.664-6.553a2.968 2.968 0 1 0-4.111-4.111zM6.5 17.5l1-1"
      />
    </svg>
  );
};
export default Dart;
