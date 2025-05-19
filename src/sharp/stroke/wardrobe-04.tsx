import React from "react";
const Wardrobe_04: React.FC<
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
        d="M6 19v3m12-3v3M3 15h9M12 19V2M21 2H3v17h18zM9 10V7M15 12V9"
      />
    </svg>
  );
};
export default Wardrobe_04;
