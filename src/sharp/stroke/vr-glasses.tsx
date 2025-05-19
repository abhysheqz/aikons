import React from "react";
const VrGlasses: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.466 9h18.918M2 9v10h7l3-3 3 3h7V9l-4-4H6zM5 12h3"
      />
    </svg>
  );
};
export default VrGlasses;
