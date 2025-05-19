import React from "react";
const DiceFaces_04: React.FC<
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
        d="M2.25 2.25h19.5v19.5H2.25zM17.5 6.5v3.01h-3V6.5zm-8 11.01V14.5h-3v3.01zm0-11.01v3.01h-3V6.5zm8 11.01V14.5h-3v3.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiceFaces_04;
