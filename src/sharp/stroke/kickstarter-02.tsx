import React from "react";
const Kickstarter_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.969 18.001V5.991q0-.008.006-.008h3.787q.005 0 .006.007l-.086 4.681c0 .006.007.01.01.005l3.828-4.688a.01.01 0 0 1 .009 0l2.494 2.314a.01.01 0 0 1 .001.01l-2.845 3.646 2.845 3.692a.01.01 0 0 1 0 .01l-2.48 2.343a.006.006 0 0 1-.01 0l-3.755-4.641c-.004-.005-.011-.002-.011.004V18q0 .007-.006.007H6.975q-.005 0-.006-.007Z"
      />
    </svg>
  );
};
export default Kickstarter_02;
