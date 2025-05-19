import React from "react";
const StrokeOutside: React.FC<
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
      <path fill="currentColor" d="M14.75 11.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fill="currentColor"
        d="M2.75 1A1.75 1.75 0 0 0 1 2.75v18c0 .966.784 1.75 1.75 1.75h18a1.75 1.75 0 0 0 1.75-1.75v-5.778a1.75 1.75 0 0 0-1.75-1.75h-4.746A4.502 4.502 0 0 1 7.25 11.75a4.5 4.5 0 0 1 3.028-4.254V2.75A1.75 1.75 0 0 0 8.528 1z"
      />
    </svg>
  );
};
export default StrokeOutside;
