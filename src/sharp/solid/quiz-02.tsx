import React from "react";
const Quiz_02: React.FC<
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
        d="M8.25 19.25V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a8.25 8.25 0 0 0-5.281 14.589c.676.563 1.188 1.218 1.41 1.911h7.742c.222-.693.734-1.348 1.41-1.912A8.25 8.25 0 0 0 12 1.25m0 5.5c-.69 0-1.25.56-1.25 1.25v.75h-1.5V8a2.75 2.75 0 1 1 5.064 1.487c-.373.58-.882 1-1.27 1.27a6 6 0 0 1-.294.189v1.304h-1.5v-2.234l.439-.198.003-.002.024-.011.104-.055c.093-.05.224-.127.372-.229.302-.209.636-.497.86-.846A1.25 1.25 0 0 0 12 6.75m.751 6.5h-1.509v1.5h1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_02;
