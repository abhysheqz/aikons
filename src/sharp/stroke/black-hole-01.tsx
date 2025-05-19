import React from "react";
const BlackHole_01: React.FC<
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
      <ellipse
        cx={12}
        cy={13}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={10}
        ry={5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.602 12c-.961 1.165-3.554 2-6.602 2s-5.64-.835-6.602-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.063 13.5a2 2 0 1 1 3.874 0M6 4l3 9.5M7 20l2-2M17 6l-2 7.5m2 6.5-2-2M12 2v9m0 11v-4"
      />
    </svg>
  );
};
export default BlackHole_01;
