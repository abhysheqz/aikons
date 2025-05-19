import React from "react";
const Gameboy: React.FC<
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
        d="M6 1.25A3.75 3.75 0 0 0 2.25 5v14A3.75 3.75 0 0 0 6 22.75h12A3.75 3.75 0 0 0 21.75 19V5A3.75 3.75 0 0 0 18 1.25zM9.75 15a.75.75 0 0 0-1.5 0v1.25H7a.75.75 0 0 0 0 1.5h1.25V19a.75.75 0 0 0 1.5 0v-1.25H11a.75.75 0 0 0 0-1.5H9.75zm7.25.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-9-10A1.75 1.75 0 0 0 6.25 7v3c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 17.75 10V7A1.75 1.75 0 0 0 16 5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gameboy;
