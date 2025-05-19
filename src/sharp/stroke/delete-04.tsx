import React from "react";
const Delete_04: React.FC<
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
        d="m20 15-7 7m7 0-7-7M19.5 5.5l-.394 6.5M4.5 5.5l1 16.5H10M2 5.5h6m14 0h-6m0 0L14.5 2h-5L8 5.5m8 0H8"
      />
    </svg>
  );
};
export default Delete_04;
