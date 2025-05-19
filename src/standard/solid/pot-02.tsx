import React from "react";
const Pot_02: React.FC<
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
        d="M2 10a1 1 0 1 0 0 2h1.338l.667 7.34a3.75 3.75 0 0 0 3.735 3.41h8.52a3.75 3.75 0 0 0 3.735-3.41l.667-7.34H22a1 1 0 1 0 0-2zM12.67 2.161a2 2 0 0 1 2.005.716l.698.886 4.357-1.225a1 1 0 1 1 .541 1.925l-4.978 1.4-.044.013L9.293 7.55l-.043.012-4.979 1.4a1 1 0 1 1-.541-1.925L8 5.837V4.803A2 2 0 0 1 9.566 2.85z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pot_02;
