import React from "react";
const AlignBoxTopRight: React.FC<
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
        d="M5.752 1A2.75 2.75 0 0 0 3 3.75v15.998a2.75 2.75 0 0 0 2.75 2.75h13a2.75 2.75 0 0 0 2.75-2.75V3.761a2.75 2.75 0 0 0-2.748-2.75zM8.25 5.748a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zm4.444 5a1 1 0 0 0 0 2h4.556a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignBoxTopRight;
