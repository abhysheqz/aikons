import React from "react";
const LookTop: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.092-1.36a.75.75 0 0 1 1.018-.298c.468.256 1.03.408 1.64.408s1.173-.152 1.64-.408a.75.75 0 1 1 .72 1.316c-.69.378-1.5.592-2.36.592s-1.67-.214-2.36-.592a.75.75 0 0 1-.298-1.018M9 5.75a1.25 1.25 0 1 0 0 2.5h.007a1.25 1.25 0 0 0 0-2.5zm5.993 0a1.25 1.25 0 1 0 0 2.5H15a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookTop;
