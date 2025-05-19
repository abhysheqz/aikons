import React from "react";
const CircleArrowDataTransferDiagonal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.53 13.53l6-6-1.06-1.06-4.72 4.72V10h-1.5v3a.75.75 0 0 0 1.28.53M16.75 11a.75.75 0 0 0-1.28-.53l-6 6 1.06 1.06 4.72-4.72V14h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDataTransferDiagonal;
