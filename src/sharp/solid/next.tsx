import React from "react";
const Next: React.FC<
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
        d="M3.626 4.35A.75.75 0 0 0 3.25 5v14a.75.75 0 0 0 1.128.648l12-7a.75.75 0 0 0 0-1.296l-12-7a.75.75 0 0 0-.752-.002"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.75 19.75V4.25h-2v15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Next;
