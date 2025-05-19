import React from "react";
const Hamburger_01: React.FC<
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
        d="M15.47 12.47a.75.75 0 0 1 .53-.22h4.5a2.25 2.25 0 0 1 .086 4.498l-.48 1.919a2.75 2.75 0 0 1-2.668 2.083H6.562a2.75 2.75 0 0 1-2.668-2.083l-.48-1.919A2.25 2.25 0 0 1 3.5 12.25H12a.75.75 0 0 1 .53.22L14 13.94zm.84 1.28-1.5 1.5h5.69a.75.75 0 0 0 0-1.5zm-3.12 1.5-1.5-1.5H3.5a.75.75 0 0 0 0 1.5zM2.75 10A6.75 6.75 0 0 1 9.5 3.25h5A6.75 6.75 0 0 1 21.25 10a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75M14 7a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m-3.47.03a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hamburger_01;
