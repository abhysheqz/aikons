import React from "react";
const HomeWifi: React.FC<
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
        d="M11 20H6.684a2 2 0 0 1-1.97-1.657L3.207 9.695a2 2 0 0 1 .756-1.932l6.323-4.834a2 2 0 0 1 2.43 0l6.32 4.834a2 2 0 0 1 .755 1.932l-.4 2.305"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 16.478C14.149 15.543 15.52 15 16.995 15c1.478 0 2.854.547 4.005 1.487M19.174 19a4.1 4.1 0 0 0-2.18-.64c-.779 0-1.516.229-2.17.634"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 22h.006"
      />
    </svg>
  );
};
export default HomeWifi;
