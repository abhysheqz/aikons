import React from "react";
const Sin: React.FC<
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
        d="M10 7h2m2 0h-2m2 10h-2m-2 0h2m0-10v10M22 6.5V17L17 7v10.5M6.69 8.616C6.264 7.652 5.443 7 4.5 7H4C2.895 7 2 8.12 2 9.5S2.895 12 4 12h1c1.105 0 2 1.12 2 2.5S6.105 17 5 17h-.5c-1.025 0-1.906-.771-2.292-1.875"
      />
    </svg>
  );
};
export default Sin;
