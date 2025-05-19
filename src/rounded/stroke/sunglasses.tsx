import React from "react";
const Sunglasses: React.FC<
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
        cx={12}
        cy={12}
        r={10}
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
        d="M9 16c.836.628 1.874 1 3 1a4.98 4.98 0 0 0 3-1M11.5 9.5C9 8 6 8 4 8c0 0 0 5 3 5 2.5 0 4.5-3.5 4.5-3.5M12.5 9.5C15 8 18 8 20 8c0 0 0 5-3 5-2.5 0-4.5-3.5-4.5-3.5"
      />
    </svg>
  );
};
export default Sunglasses;
