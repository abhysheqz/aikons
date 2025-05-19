import React from "react";
const Amie: React.FC<
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
        strokeWidth={1.5}
        d="M3 8.5c0 1.33.472 2.55 1.257 3.5A5.5 5.5 0 0 0 12 19.743 5.5 5.5 0 0 0 19.743 12 5.5 5.5 0 0 0 12 4.257 5.5 5.5 0 0 0 3 8.5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 9.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0z"
      />
    </svg>
  );
};
export default Amie;
