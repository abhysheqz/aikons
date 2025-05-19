import React from "react";
const CallUnlocked_02: React.FC<
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
        d="M17.25 4C16.56 4 16 4.56 16 5.25V6h5.5v6H13V6h1.5v-.75a2.75 2.75 0 0 1 4.812-1.82l.497.563-1.125.993-.496-.563A1.25 1.25 0 0 0 17.25 4"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.417-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallUnlocked_02;
