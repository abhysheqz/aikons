import React from "react";
const More_01: React.FC<
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
        strokeWidth={2.5}
        d="M11.996 18h.009M18 18h.009M6 18h.009M11.996 12h.009M12 6h.009M18 12h.009M18 6h.009M6 12h.009M6 6h.009"
      />
    </svg>
  );
};
export default More_01;
