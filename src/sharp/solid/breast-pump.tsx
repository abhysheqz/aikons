import React from "react";
const BreastPump: React.FC<
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
        d="M12.5 8.25A5.75 5.75 0 0 0 6.75 14v8a.75.75 0 0 0 .75.75h10a.75.75 0 0 0 .75-.75v-3.25H15v-1.5h3.25v-2.5H15v-1.5h3.201a5.75 5.75 0 0 0-5.701-5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 1.25c-.867 0-1.535.192-2.076.512-.528.313-.886.72-1.16 1.047-.328.394-.87.911-1.464 1.397-.37.302-.74.577-1.073.794H6.586L4.329 7.256a2.25 2.25 0 1 0 1.956.874L7.415 7H11.5v2a1 1 0 1 0 2 0V7h1.728c.332.217.703.491 1.072.793.594.486 1.136 1.003 1.465 1.397.273.327.63.735 1.159 1.048.54.32 1.208.512 2.076.512h.75v-9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BreastPump;
