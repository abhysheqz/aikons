import React from "react";
const CircleArrowExpand_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m2.69 7H13a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.31l-2.22 2.22a.75.75 0 1 1-1.06-1.06zm-3.16 4.22a.75.75 0 0 1 0 1.06l-2.22 2.22H11a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1-.75-.75V13a.75.75 0 0 1 1.5 0v1.69l2.22-2.22a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowExpand_01;
