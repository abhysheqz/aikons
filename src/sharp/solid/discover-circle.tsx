import React from "react";
const DiscoverCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M17 7 9.5 9.5 7 17l7.502-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.7 11.292c.39.39.39 1.02 0 1.41l-.006.006a.997.997 0 1 1-1.41-1.41l.006-.006a.997.997 0 0 1 1.41 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscoverCircle;
