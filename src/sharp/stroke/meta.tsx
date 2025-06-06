import React from "react";
const Meta: React.FC<
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
        d="M12 9.87Q9.058 4.999 6.835 5C4.613 5 3.21 7.582 2.391 11.086 1.608 14.435 1.835 19 4.613 19c1.238 0 2.942-1.826 4.61-4.26A32.6 32.6 0 0 0 12 9.87m0 0Q14.943 4.999 17.165 5c2.222 0 3.625 2.582 4.444 6.086.782 3.348.556 7.914-2.222 7.914-1.238 0-2.942-1.826-4.61-4.26A32.6 32.6 0 0 1 12 9.87"
      />
    </svg>
  );
};
export default Meta;
