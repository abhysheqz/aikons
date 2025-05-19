import React from "react";
const DiceFaces_06: React.FC<
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
        d="M2.25 2.25h19.5v19.5H2.25zm8.25 8.25v3.01h-3V10.5zm6-1.99V5.5h-3v3.01zm-6 6.99v3.01h-3V15.5zm0-6.99V5.5h-3v3.01zm6 6.99v3.01h-3V15.5zm0-1.99V10.5h-3v3.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiceFaces_06;
