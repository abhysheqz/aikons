import React from "react";
const AlignRight: React.FC<
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
        d="M9.254 5a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75l.004 5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM3.25 14a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 22V2h2v20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignRight;
