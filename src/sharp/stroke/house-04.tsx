import React from "react";
const House_04: React.FC<
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
        d="m7 9 7.5-6L22 9M8.5 8v12m12 0V8"
      />
      <ellipse
        cx={3.5}
        cy={12}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1.5}
        ry={2}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M3.5 14v6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 20h20M12 20v-6h5v6M13.5 11h2m-2-3h2"
      />
    </svg>
  );
};
export default House_04;
