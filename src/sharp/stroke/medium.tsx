import React from "react";
const Medium: React.FC<
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
        cx={6.5}
        cy={12}
        r={4.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <ellipse
        cx={15.5}
        cy={12}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={2.5}
        ry={4.5}
      />
      <ellipse
        cx={21}
        cy={12}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1}
        ry={4.5}
      />
    </svg>
  );
};
export default Medium;
