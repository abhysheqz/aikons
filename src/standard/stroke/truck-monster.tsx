import React from "react";
const TruckMonster: React.FC<
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
        cy={16.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={16.5}
        cy={16.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.5 4 .81 3.243a1 1 0 0 0 .97.757H18M12 10.5h1M9 5H8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 16H2V9.5h6.405a1 1 0 0 0 .996-1.09L9 4h5.5a1 1 0 0 1 .8.4L18 8l2.387 1.023a2 2 0 0 1 1.206 1.685L22 16h-2m-10 0h3"
      />
    </svg>
  );
};
export default TruckMonster;
