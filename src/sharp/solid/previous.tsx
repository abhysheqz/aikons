import React from "react";
const Previous: React.FC<
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
        d="M20.374 4.35a.75.75 0 0 1 .376.65v14a.75.75 0 0 1-1.128.648l-12-7a.75.75 0 0 1 0-1.296l12-7a.75.75 0 0 1 .752-.002"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 19.75V4.25h2v15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Previous;
