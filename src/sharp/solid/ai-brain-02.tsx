import React from "react";
const AiBrain_02: React.FC<
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
        d="M12 21.577a3.251 3.251 0 0 1-5.677-1.388 3.75 3.75 0 0 1-2.909-4.79 3.75 3.75 0 0 1 0-6.798 3.751 3.751 0 0 1 2.909-4.79A3.251 3.251 0 0 1 12 2.423a3.251 3.251 0 0 1 5.677 1.388 3.75 3.75 0 0 1 2.909 4.79 3.75 3.75 0 0 1 0 6.798 3.751 3.751 0 0 1-2.909 4.79A3.251 3.251 0 0 1 12 21.577M11.25 8.25h1.5V6.5h1.5v1.75h1.5v1.5h1.75v1.5h-1.75v1.5h1.75v1.5h-1.75v1.5h-1.5v1.75h-1.5v-1.75h-1.5v1.75h-1.5v-1.75h-1.5v-1.5H6.5v-1.5h1.75v-1.5H6.5v-1.5h1.75v-1.5h1.5V6.5h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_02;
