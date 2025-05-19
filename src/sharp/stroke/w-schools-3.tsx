import React from "react";
const WSchools_3: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 8H2l6 10 4.5-7 4.5 7 2-3.5L15 8h-5l-2 3zM19 6h3v.199l-2 1.687V8h.5A1.5 1.5 0 0 1 22 9.5c0 .828-.748 1.5-1.743 1.5-.7 0-1.257-.367-1.257-.367"
      />
    </svg>
  );
};
export default WSchools_3;
