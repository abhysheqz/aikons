import React from "react";
const MoreVerticalCircle_02: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m0-16a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5zm0 4a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5zm0 4a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVerticalCircle_02;
