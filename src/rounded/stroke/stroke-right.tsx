import React from "react";
const StrokeRight: React.FC<
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
        d="M17 19H9c-2.828 0-4.243 0-5.121-.879C3 17.243 3 15.828 3 13v-2c0-2.828 0-4.243.879-5.121C4.757 5 6.172 5 9 5h8M20.998 21V3"
      />
    </svg>
  );
};
export default StrokeRight;
