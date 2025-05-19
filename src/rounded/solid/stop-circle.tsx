import React from "react";
const StopCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12 16c-1.605 0-2.408 0-2.984-.385a2.3 2.3 0 0 1-.63-.63C8 14.407 8 13.604 8 12s0-2.408.385-2.984c.167-.25.381-.464.63-.63C9.593 8 10.396 8 12 8s2.408 0 2.984.385c.25.167.464.381.63.63C16 9.593 16 10.396 16 12s0 2.408-.385 2.984c-.167.25-.381.464-.63.63C14.407 16 13.604 16 12 16"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StopCircle;
