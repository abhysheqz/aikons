import React from "react";
const CircleArrowUpDouble: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.53 9.22-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06L12 9.06l2.47 2.47a.75.75 0 1 0 1.06-1.06m-3 2a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06L12 14.06l2.47 2.47a.75.75 0 1 0 1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUpDouble;
