import React from "react";
const Colors: React.FC<
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
        d="M11.75 1a6.75 6.75 0 0 0-3.657 12.425 8.004 8.004 0 0 1 10.39-5.196q.017-.237.017-.479A6.75 6.75 0 0 0 11.75 1M9 15.75a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m-1.184-1.033a8.02 8.02 0 0 1-3.723-4.642A6.75 6.75 0 0 0 10.6 21.871a7.98 7.98 0 0 1-2.783-7.154"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Colors;
