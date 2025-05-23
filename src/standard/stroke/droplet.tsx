import React from "react";
const Droplet: React.FC<
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
        d="M10.935 2.421C9.035 3.881 3 8.894 3 13.678 3 17.78 6.219 22 11.5 22s8.5-4.22 8.5-8.322c0-4.784-6.035-9.797-7.935-11.257a.92.92 0 0 0-1.13 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 14a4 4 0 0 1-4 4"
      />
    </svg>
  );
};
export default Droplet;
