import React from "react";
const Underpants_01: React.FC<
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
        d="M8.5 15.004s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M4 8.004h16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.999 17.059.763 2.26a1 1 0 0 0 .947.681h4.026a2 2 0 0 0 1.984-2.248l-1.5-12A2 2 0 0 0 18.235 4H5.75a2 2 0 0 0-1.985 1.754l-1.488 12A2 2 0 0 0 4.263 20h4a1 1 0 0 0 .948-.681l.8-2.38"
      />
    </svg>
  );
};
export default Underpants_01;
