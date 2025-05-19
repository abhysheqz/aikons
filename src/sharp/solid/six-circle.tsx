import React from "react";
const SixCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M11 6a3 3 0 0 0-3 3v6.5h.041A3 3 0 0 0 11 18h2a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-2c-.35 0-.687.06-1 .17V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h2V9a3 3 0 0 0-3-3zm-1 9v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SixCircle;
