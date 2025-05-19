import React from "react";
const Medal_03: React.FC<
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
        d="M11.665 11.33a.75.75 0 0 1 .67 0l4 2a.75.75 0 0 1 .415.67v5a.75.75 0 0 1-.415.67l-4 2a.75.75 0 0 1-.67 0l-4-2A.75.75 0 0 1 7.25 19v-5a.75.75 0 0 1 .415-.67z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2.25H3.5a.75.75 0 0 0-.75.75v5c0 .29.168.555.43.679l8.5 4a.75.75 0 0 0 .64 0l8.5-4A.75.75 0 0 0 21.25 8V3a.75.75 0 0 0-.75-.75H13v3.946a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_03;
