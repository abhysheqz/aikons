import React from "react";
const Location_02: React.FC<
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
        d="M11.278 22.416A22.781 22.781 0 0 1 7.02 19.64c-2.31-1.918-4.77-4.85-4.77-8.673C2.25 5.601 6.615 1.25 12 1.25s9.75 4.35 9.75 9.718c0 3.823-2.46 6.755-4.77 8.673a22.8 22.8 0 0 1-4.258 2.775L12 22.75z"
      />
    </svg>
  );
};
export default Location_02;
