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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 8 1.51 10.576A3 3 0 0 1 18.54 22H5.46a3 3 0 0 1-2.97-3.424L4 8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 15h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 15S20 14 20 8H4c0 6 3.5 7 3.5 7"
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
        d="M6.5 8.5C7.07 4.492 9.316 2 12 2s4.93 2.492 5.5 6.5"
      />
    </svg>
  );
};
export default HandBag_02;
