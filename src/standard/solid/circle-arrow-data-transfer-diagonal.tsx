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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m2.03 6.22a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.28-.53v-3a.75.75 0 0 1 1.5 0v1.19l4.22-4.22a.75.75 0 0 1 1.06 0m2.257 2.337a.75.75 0 0 1 .463.693v3a.75.75 0 0 1-1.5 0v-1.19l-4.22 4.22a.75.75 0 0 1-1.06-1.06l5.5-5.5a.75.75 0 0 1 .817-.163"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDataTransferDiagonal;
