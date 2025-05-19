import React from "react";
const Mouse_19: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v3m0 4v2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2a6 6 0 0 0-5.764 7.672c.425 1.468.58 3.27.2 4.75-.119.46-.283 1.092-.436 1.578.086 3.238 2.74 6 6 6s5.914-2.762 6-6a33 33 0 0 1-.435-1.578c-.38-1.48-.226-3.282.199-4.75A6 6 0 0 0 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 5h-3v4h3z"
      />
    </svg>
  );
};
export default Mouse_19;
