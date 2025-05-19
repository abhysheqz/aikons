import React from "react";
const RoadLocation_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 8.219c0-.535.438-.969.977-.969h3.91v1.938H3.204v11.625h17.59V9.188h-2.931V7.25h3.909c.54 0 .977.434.977.969V21.78a.973.973 0 0 1-.977.969H2.227a.98.98 0 0 1-.69-.284.97.97 0 0 1-.287-.685z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.992 14h3v2h-3zm5.5 0h3v2h-3zm5.5 0h3v2h-3zM10.99 11.318c.202.117.37.207.492.268l.51.236.51-.236a10.54 10.54 0 0 0 1.973-1.306c1.061-.895 2.267-2.323 2.267-4.23 0-2.642-2.118-4.8-4.75-4.8s-4.75 2.158-4.75 4.8c0 1.907 1.206 3.335 2.267 4.23.542.457 1.08.805 1.481 1.038m.994-7.068c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75H12c.962 0 1.742-.784 1.742-1.75S12.962 4.25 12 4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RoadLocation_01;
