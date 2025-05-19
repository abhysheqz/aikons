import React from "react";
const Hyperbole: React.FC<
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
        d="M2 12h20M12 22V2M21 8a5 5 0 0 1-5-5M3 16a5 5 0 0 1 5 5"
      />
    </svg>
  );
};
export default Hyperbole;
