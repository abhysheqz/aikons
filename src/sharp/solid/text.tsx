import React from "react";
const Text: React.FC<
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
        d="M9 20h6v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 21V3h2v18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.29 2.293A1 1 0 0 1 4.999 2H19a1 1 0 0 1 1 1v3h-2V4H5.999L6 6H4l-.002-3a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Text;
