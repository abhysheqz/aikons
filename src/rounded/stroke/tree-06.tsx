import React from "react";
const Tree_06: React.FC<
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
        d="M12 22V9M9.002 18.002c-1.657 0-3-1.379-3-3.035a3.5 3.5 0 0 1-.74-6.74 3 3 0 0 1 3.844-4.016 3.001 3.001 0 0 1 5.79.001 3 3 0 0 1 3.844 4.016 3.501 3.501 0 0 1-.738 6.739c0 1.656-1.343 3.035-3 3.035M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_06;
