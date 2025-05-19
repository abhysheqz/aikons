import React from "react";
const DiceFaces_03: React.FC<
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
        d="M19.75 2.25H4.25a2 2 0 0 0-2 2v15.5a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2V4.25a2 2 0 0 0-2-2m-6.25 9.744a1.5 1.5 0 0 0-3 0v.01a1.5 1.5 0 1 0 3 0zM8 6.494a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 1 1-3 0v-.01a1.5 1.5 0 0 1 1.5-1.5m9.5 9.5a1.5 1.5 0 0 0-3 0v.01a1.5 1.5 0 1 0 3 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiceFaces_03;
