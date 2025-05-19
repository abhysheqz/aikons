import React from "react";
const CameraNightMode_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.12 18c-2 0-3.62-1.58-3.62-3.53 0-1.727 1.273-3.165 2.954-3.47a3.4 3.4 0 0 0-.24 1.264c0 1.95 1.621 3.53 3.62 3.53q.342 0 .666-.06C14.979 17.06 13.662 18 12.12 18Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.064 21.91V6.11a.1.1 0 0 0-.1-.1h-4.902l-1.988-3.946a.1.1 0 0 0-.09-.055H9.1a.1.1 0 0 0-.09.055L7.06 6.01h-4.9a.1.1 0 0 0-.1.1v15.8a.1.1 0 0 0 .1.1h19.805a.1.1 0 0 0 .1-.1Z"
      />
    </svg>
  );
};
export default CameraNightMode_02;
