import React from "react";
const MobileSecurity: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2H5v20h14v-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.5 5.5V4a2 2 0 1 0-4 0v1.5m-1.5 0h7V11h-7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 19h3"
      />
    </svg>
  );
};
export default MobileSecurity;
