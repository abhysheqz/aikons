import React from "react";
const ThreeCircle: React.FC<
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
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M11.5 6A3.5 3.5 0 0 0 8 9.5a1 1 0 1 0 2 0A1.5 1.5 0 0 1 11.5 8h1a1.5 1.5 0 0 1 0 3h-1a1 1 0 1 0 0 2h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.5-1.5 1 1 0 1 0-2 0 3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 2.45-6 3.5 3.5 0 0 0-2.45-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThreeCircle;
