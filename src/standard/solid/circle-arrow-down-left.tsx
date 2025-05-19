import React from "react";
const CircleArrowDownLeft: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.53 8.28a.75.75 0 0 0-1.06-1.06l-4.72 4.72V11a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 1 0 0-1.5h-2.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDownLeft;
