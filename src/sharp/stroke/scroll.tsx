import React from "react";
const Scroll: React.FC<
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
        d="M11 6h6M11 10h6M11 14h3M19 22a2 2 0 0 0 2-2V2H7v16m12 4a2 2 0 0 1-2-2v-2H7m12 4H5a2 2 0 0 1-2-2v-2h4"
      />
    </svg>
  );
};
export default Scroll;
