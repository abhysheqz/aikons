import React from "react";
const Tiltify: React.FC<
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
        d="M16 5.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M3.852 3.59a2.67 2.67 0 0 1 3.688-.96l10.002 5.984a1.967 1.967 0 0 1 .75 2.57 1.936 1.936 0 0 1-2.515.9l-3.18-1.41-1.166 9.33a1.994 1.994 0 0 1-3.958-.485L8.74 8.962 5.086 7.345A2.66 2.66 0 0 1 3.852 3.59"
      />
    </svg>
  );
};
export default Tiltify;
