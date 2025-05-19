import React from "react";
const MediumSquare: React.FC<
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
      <circle
        cx={7.5}
        cy={12.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <ellipse
        cx={13.5}
        cy={12.5}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1.5}
        ry={2.5}
      />
      <ellipse
        cx={18}
        cy={12.5}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1}
        ry={2.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
    </svg>
  );
};
export default MediumSquare;
