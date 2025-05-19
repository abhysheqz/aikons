import React from "react";
const CodeFolder: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-9.625l-3-4zm12.469 10.28 1.47 1.47-1.47 1.47 1.06 1.06L18.06 14l-2.53-2.53zm-6-1.06 1.061 1.06L8.06 14l1.47 1.47-1.06 1.06L5.94 14zm3.82-.707-2 6 1.423.474 2-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CodeFolder;
