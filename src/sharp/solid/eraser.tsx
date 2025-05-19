import React from "react";
const Eraser: React.FC<
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
        d="M16.03 1.47a.75.75 0 0 0-1.06 0L9.666 6.773l7.061 7.06L22.03 8.53a.75.75 0 0 0 0-1.06zM15.313 15.248l-7.06-7.06L1.97 14.47a.75.75 0 0 0 0 1.06l4.22 4.22h4.62z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.504 22.75h-11v-2h11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Eraser;
