import React from "react";
const Undo: React.FC<
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
        d="M3.413 2.004a1 1 0 0 1 1.083.91l.197 2.26A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a1 1 0 1 1 2 0 8 8 0 1 0 1.92-5.2l2.982-.295a1 1 0 0 1 .196 1.99l-5.064.5a1 1 0 0 1-1.095-.908l-.435-5a1 1 0 0 1 .91-1.083"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Undo;
