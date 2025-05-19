import React from "react";
const CircleArrowDataTransferHorizontal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.45 7.4a.75.75 0 0 1 .15 1.05l-.6.8h7.5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.05-.15M6.75 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 1 1-1.2-.9l.6-.8H7.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDataTransferHorizontal;
