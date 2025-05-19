import React from "react";
const StrokeInside: React.FC<
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
        d="M1.25 19.25a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
      />
      <path
        fill="currentColor"
        d="M2 1.25a.75.75 0 0 0-.75.75v13.68a5 5 0 0 1 7.07 7.07H22a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75H11.75V2a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default StrokeInside;
