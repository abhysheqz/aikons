import React from "react";
const DrawingCompass: React.FC<
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
        d="M10 9 5 22m9-13 5 13M12 4V2"
      />
      <circle
        cx={12}
        cy={7}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13c1.99 3.024 5.28 5 9 5s7.01-1.976 9-5M12 16v4"
      />
    </svg>
  );
};
export default DrawingCompass;
