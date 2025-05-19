import React from "react";
const TouchLocked_03: React.FC<
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
        strokeWidth={1.5}
        d="M12 21H8l-4.61-6.912a1.74 1.74 0 0 1 2.481-2.417L8.005 13.5V3.75a1.75 1.75 0 1 1 3.5 0v5.728H16c1.12 0 2.096.613 2.611 1.522M19.5 17v-1.5a1.5 1.5 0 0 0-3 0V17"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M21 17h-6v5h6z" />
    </svg>
  );
};
export default TouchLocked_03;
