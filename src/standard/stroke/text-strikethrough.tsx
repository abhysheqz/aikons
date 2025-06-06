import React from "react";
const TextStrikethrough: React.FC<
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
        d="M4 12h16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 6.5C17.48 4.412 14.935 3 12 3 8.686 3 6 5.015 6 7.5c0 .852.182 1.46.5 2m-.5 8c.509 2.099 3.055 3.5 6 3.5 3.314 0 6-2.015 6-4.5 0-3.462-3-4.5-6-4.5"
      />
    </svg>
  );
};
export default TextStrikethrough;
