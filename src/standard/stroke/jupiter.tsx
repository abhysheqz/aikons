import React from "react";
const Jupiter: React.FC<
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
        d="M21.275 15.5c-3.608-.005-6.563.86-9.772 3C9.92 19.555 9 20 7 20.5M22 11c-5.073 2.95-7.662 2.112-12.997-1C6.565 8.578 4.5 8.5 2.5 9m18.775-.5c-4.06 0-3.772-3.725-9.272-2.5-3.6.802-5.632-.832-6.503-1.5M8 16.5c1.105 0 2-.672 2-1.5s-.895-1.5-2-1.5-2 .672-2 1.5.895 1.5 2 1.5"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Jupiter;
