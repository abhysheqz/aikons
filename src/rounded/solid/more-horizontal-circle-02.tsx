import React from "react";
const MoreHorizontalCircle_02: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m-.004-12a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5zM14.75 12c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25M8 10.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreHorizontalCircle_02;
