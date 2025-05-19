import React from "react";
const DiscoverSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM17 7 9.5 9.5 7 17l7.502-2.5z"
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
export default DiscoverSquare;
