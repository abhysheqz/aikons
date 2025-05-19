import React from "react";
const Glove: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 17h-7.5M8.484 9.42V14l-1.527-2.047a1.915 1.915 0 0 0-3.012-.077 1.94 1.94 0 0 0-.107 2.33l4.05 5.923A2 2 0 0 0 9.54 21h8.278a2 2 0 0 0 1.97-1.657L21.418 10c.649-3.914-2.599-7-6.546-7-3.527 0-6.387 2.875-6.387 6.42"
      />
    </svg>
  );
};
export default Glove;
