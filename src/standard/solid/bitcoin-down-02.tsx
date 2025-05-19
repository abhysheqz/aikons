import React from "react";
const BitcoinDown_02: React.FC<
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
        d="M10.25 8.25a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M11 12a.75.75 0 0 0-1.5 0v.25H8.25a.75.75 0 0 0 0 1.5h.25v3.5h-.25a.75.75 0 0 0 0 1.5H9.5V19a.75.75 0 0 0 1.5 0v-.25a2 2 0 0 0 1.561-3.25A2 2 0 0 0 11 12.25zm-1 2.75v-1h1a.5.5 0 0 1 0 1zm0 1.5h1a.5.5 0 0 1 0 1h-1zM3.441 1.412a1 1 0 0 1 1.397-.22l4.81 3.497 3.395-3.396a1 1 0 0 1 1.414 0l4.293 4.293V4.5a1 1 0 1 1 2 0V8a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2h1.086L13.75 3.414l-3.293 3.293a1 1 0 0 1-1.295.102l-5.5-4a1 1 0 0 1-.22-1.397"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinDown_02;
