import React from "react";
const ChartUp: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 21h-1a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M16.5 3h3v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 3.5s-4 5-14.5 8.5M12.5 21h-1a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1M5.5 21h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1"
      />
    </svg>
  );
};
export default ChartUp;
