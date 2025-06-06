import React from "react";
const StrokeTop: React.FC<
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
        fillRule="evenodd"
        d="M5 6.001a1 1 0 0 1 1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-12a1 1 0 1 1 2 0v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-12a1 1 0 0 1 1-1M2 2.999a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeTop;
