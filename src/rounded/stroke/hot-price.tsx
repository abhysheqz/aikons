import React from "react";
const HotPrice: React.FC<
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
        d="M12 22a8 8 0 0 0 8-8c0-6-8-12-8-12-.388 2.487-.768 3.822-2 6-1.2-.555-1.5-1-2-2.25C6 8 4 11 4 14a8 8 0 0 0 8 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 17 4-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 13h.009m3.982 4H14"
      />
    </svg>
  );
};
export default HotPrice;
