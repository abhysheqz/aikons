import React from "react";
const Sharing: React.FC<
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
        d="M8.25 16a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 4.25h6v6h-2V7.664l-4.793 4.793-1.414-1.414 4.793-4.793H16.75zM1.25 4.25h6v2H4.664l4.793 4.793-1.414 1.414L3.25 7.664v2.586h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sharing;
