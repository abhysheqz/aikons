import React from "react";
const Bicycle: React.FC<
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
        d="M6 19.999c2.21 0 4-1.788 4-3.993a3.996 3.996 0 0 0-4-3.992c-2.21 0-4 1.787-4 3.992A3.996 3.996 0 0 0 6 20M18 19.999c2.21 0 4-1.788 4-3.993a3.996 3.996 0 0 0-4-3.992c-2.21 0-4 1.787-4 3.992A3.996 3.996 0 0 0 18 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 16.006h4.37a1 1 0 0 0 .87-.505l4.26-7.48M12 13.012 7 7.023m0 0H5m2 0h2M18.053 15.97 14.806 4.032c1.45-.07 4.553-.2 5.185 2.179"
      />
    </svg>
  );
};
export default Bicycle;
