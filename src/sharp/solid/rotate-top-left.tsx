import React from "react";
const RotateTopLeft: React.FC<
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
        d="M17.25 9a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.664 1.25 9.543 4.543a1 1 0 0 0 .707 1.707h9v8h2v-9a1 1 0 0 0-1-1h-7.586l1.415-1.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateTopLeft;
