import React from "react";
const SolarPanel_03: React.FC<
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
        d="M11.251 11.25v5H3.942l1.126-3.753a1.75 1.75 0 0 1 1.676-1.247zm1.5 0v5h7.307l-1.126-3.753a1.75 1.75 0 0 0-1.676-1.247zm7.757 6.5H12.75v5h6.905a1.75 1.75 0 0 0 1.676-2.253zm-9.257 5v-5H3.492l-.824 2.747a1.75 1.75 0 0 0 1.676 2.253zM12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M6.47 3.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06m11.06 0a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M4.25 9A.75.75 0 0 1 5 8.25h1a.75.75 0 1 1 0 1.5H5A.75.75 0 0 1 4.25 9m13 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8.25 9a3.75 3.75 0 1 1 7.5 0v.75h-7.5z" />
    </svg>
  );
};
export default SolarPanel_03;
