import React from "react";
const PaintBrush_04: React.FC<
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
        fill="currentColor"
        d="M9.25 2a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v6.575l4.636 2.782a.75.75 0 0 1 .364.643v2.75H4.25V12a.75.75 0 0 1 .364-.643L9.25 8.575zM5.594 15.75h13.961l1.178 6.076a.75.75 0 0 1-.733.907h-4a.75.75 0 0 1-.75-.75v-1.956c-.56.467-1.196.85-1.86 1.162-1.328.625-2.825.999-4.207 1.223a27 27 0 0 1-3.64.33c-.472.01-1.289-.004-1.572-.01h-.01a.75.75 0 0 1-.57-1.185c1.4-1.957 1.97-4.53 2.203-5.797"
      />
    </svg>
  );
};
export default PaintBrush_04;
