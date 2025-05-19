import React from "react";
const LookBottom: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.11 4.342c.468.256 1.03.408 1.64.408.611 0 1.173-.152 1.64-.408l.72 1.316c-.69.377-1.5.592-2.36.592s-1.67-.215-2.36-.592zM9 11.75a1.25 1.25 0 1 0 0 2.5h.007a1.25 1.25 0 1 0 0-2.5zm5.993 0a1.25 1.25 0 1 0 0 2.5H15a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookBottom;
