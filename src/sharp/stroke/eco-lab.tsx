import React from "react";
const EcoLab: React.FC<
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
        strokeWidth={1.5}
        d="M12 5v4M8 2h2a2 2 0 0 1 2 2v1h-2a2 2 0 0 1-2-2zM16.815 22h-9.63a1.185 1.185 0 0 1-1.029-1.773L10 13.5V9h4v4.5l3.844 6.727A1.185 1.185 0 0 1 16.814 22ZM9 9h6M16 3h-2a2 2 0 0 0-2 2v1h2a2 2 0 0 0 2-2z"
      />
    </svg>
  );
};
export default EcoLab;
