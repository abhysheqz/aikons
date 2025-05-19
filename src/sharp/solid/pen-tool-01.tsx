import React from "react";
const PenTool_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m6.175 17.013a8.795 8.795 0 1 0-12.352-.001l2.148-6.012h8.057z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M14.337 11 12 6.323 9.66 11z" />
    </svg>
  );
};
export default PenTool_01;
