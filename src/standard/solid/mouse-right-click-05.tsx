import React from "react";
const MouseRightClick_05: React.FC<
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
      <path fill="currentColor" d="M21 5.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.15 4.414C5.482 2.267 7.702 1 11 1c1.688 0 3.093.332 4.242.944a4.5 4.5 0 0 0-1.293 1.594c-.554-.243-1.198-.41-1.949-.489v1.514A2 2 0 0 1 13.5 6.5V8A2 2 0 0 1 12 9.937V11h5.482q-.02-.532-.064-1.037a4.54 4.54 0 0 0 1.991-.188c.064.73.091 1.475.091 2.225 0 2.798-.375 5.53-1.65 7.586C16.518 21.733 14.297 23 11 23c-3.298 0-5.518-1.267-6.85-3.414C2.875 17.53 2.5 14.798 2.5 12s.375-5.53 1.65-7.586m1.7 1.054C4.998 6.841 4.604 8.746 4.518 11H10V9.937A2 2 0 0 1 8.5 8V6.5A2 2 0 0 1 10 4.563V3.049c-2.092.217-3.352 1.132-4.15 2.42"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_05;
