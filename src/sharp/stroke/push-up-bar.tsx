import React from "react";
const PushUpBar: React.FC<
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
        d="M3.998 10.5V5H7.5M20 10.5V5h-3.5M22 10.5h-4M6 10.5H2M7.5 3.498h9V6.5l-2.5.998-2-.998-2 .998L7.5 6.5zM3.998 20.5V15H7.5M20 20.5V15h-3.5M22 20.5h-4M6 20.5H2M7.5 13.498h9V16.5l-2.5.998-2-.998-2 .998-2.5-.998z"
      />
    </svg>
  );
};
export default PushUpBar;
