import React from "react";
const MoreVertical: React.FC<
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
        d="M10.242 12c0-.966.783-1.75 1.75-1.75h.009a1.75 1.75 0 1 1 0 3.5h-.009a1.75 1.75 0 0 1-1.75-1.75M10.234 18c0-.966.784-1.75 1.75-1.75h.01a1.75 1.75 0 1 1 0 3.5h-.01a1.75 1.75 0 0 1-1.75-1.75M10.25 6c0-.966.783-1.75 1.75-1.75h.009a1.75 1.75 0 1 1 0 3.5h-.01A1.75 1.75 0 0 1 10.25 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVertical;
