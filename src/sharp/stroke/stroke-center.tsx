import React from "react";
const StrokeCenter: React.FC<
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
        d="M2 22h20v-9H11V2H2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6.5 12V2M12 17.5h10"
      />
    </svg>
  );
};
export default StrokeCenter;
