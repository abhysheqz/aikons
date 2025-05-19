import React from "react";
const Chair_03: React.FC<
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
        d="M8.571 1C6.46 1 5 2.941 5 5v1a1 1 0 0 0 1 1h.402L5.004 21.907a1 1 0 1 0 1.992.186L7.566 16h8.867l.571 6.093a1 1 0 1 0 1.992-.186L17.598 7H18a1 1 0 0 0 1-1V5c0-2.059-1.46-4-3.571-4zm7.018 6H8.411l-.375 4h7.928z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chair_03;
