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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 8 7.5-6L22 8M8.5 7v13m12 0V7"
      />
      <ellipse
        cx={3.5}
        cy={12}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={1.5}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 14v6M2 20h20M12.5 20v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M13.5 9h2"
      />
    </svg>
  );
};
export default House_04;
