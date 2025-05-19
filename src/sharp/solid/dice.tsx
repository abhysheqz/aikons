import React from "react";
const Dice: React.FC<
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
        d="M13.25 13a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM1.25 13a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.53 2.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06zM12.003 7 10 9.003 11.997 11 14 8.997z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dice;
