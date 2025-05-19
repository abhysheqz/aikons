import React from "react";
const HandBag_02: React.FC<
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
        d="m20.001 8 2 14H2l2-14"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 15h-4v3h4zM16.5 15S20 14 20 8H4c0 6 3.5 7 3.5 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 15V8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.5 8c.57-4.008 2.816-7 5.5-7s4.93 2.992 5.5 7"
      />
    </svg>
  );
};
export default HandBag_02;
