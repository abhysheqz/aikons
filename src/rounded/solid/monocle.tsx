import React from "react";
const Monocle: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.125 8.371a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.875 5.371a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-6 5.83v3.17a1 1 0 1 1-2 0v-3.17a3.001 3.001 0 1 1 2 0m6 .17a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-6 6a1 1 0 1 0-2 0v2c0 .466.08.915.228 1.333a1 1 0 1 0 1.885-.666 2 2 0 0 1-.113-.667zm6 0a1 1 0 1 0-2 0v2q-.002.355-.113.667a1 1 0 1 0 1.885.666c.148-.418.228-.867.228-1.333zm-4.667 3.887a1 1 0 1 0-.666 1.885 4 4 0 0 0 2.666 0 1 1 0 1 0-.666-1.886 2 2 0 0 1-1.334 0M14.875 8.37a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Monocle;
