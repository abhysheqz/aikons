import React from "react";
const Slide: React.FC<
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
        d="m7 19 2.5-8.5M4.5 11.5H9M3 15.5h4.5M2 19 6 5l7.82 12.163c.577.899.865 1.348 1.313 1.592.449.245.983.245 2.05.245H22a2.75 2.75 0 0 1-2.311-1.262L11.5 5M7.5 7h5"
      />
    </svg>
  );
};
export default Slide;
