import React from "react";
const DiceFaces_02: React.FC<
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
        d="M4.25 2.25h15.5a2 2 0 0 1 2 2v15.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2V4.25a2 2 0 0 1 2-2M8 6.494a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 1 1-3 0v-.01a1.5 1.5 0 0 1 1.5-1.5m9.5 9.5a1.5 1.5 0 0 0-3 0v.01a1.5 1.5 0 1 0 3 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiceFaces_02;
