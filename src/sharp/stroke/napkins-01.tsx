import React from "react";
const Napkins_01: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M6 19h15v-.5L6.5 2H6z" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 19.224 2 2.276v.5H3V5h.5L6 7.845"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 5v11h10" />
    </svg>
  );
};
export default Napkins_01;
