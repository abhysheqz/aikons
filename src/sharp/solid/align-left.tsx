import React from "react";
const AlignLeft: React.FC<
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
        d="M14.746 5a.75.75 0 0 0-.75-.75H8a.75.75 0 0 0-.75.75l-.004 5a.75.75 0 0 0 .75.75h6a.75.75 0 0 0 .75-.75zM20.75 14a.75.75 0 0 0-.75-.75H8a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 22V2h-2v20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignLeft;
