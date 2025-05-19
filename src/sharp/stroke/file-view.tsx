import React from "react";
const FileView: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 2.5V9h6.5m.5 4V9l-7-7H3v20h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 22c2.761 0 5-3 5-3s-2.239-3-5-3-5 3-5 3 2.239 3 5 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.99 19H16"
      />
    </svg>
  );
};
export default FileView;
