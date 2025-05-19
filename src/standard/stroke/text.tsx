import React from "react";
const Text: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 21h-5M12 3v18M5 5.5V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5"
      />
    </svg>
  );
};
export default Text;
