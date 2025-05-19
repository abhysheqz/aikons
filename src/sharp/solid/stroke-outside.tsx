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
      <path fill="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fill="currentColor"
        d="M2 1.25a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-5.507a4.5 4.5 0 1 1-4.743-4.743V2a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default StrokeOutside;
