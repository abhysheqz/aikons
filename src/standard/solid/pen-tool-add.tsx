import React from "react";
const PenToolAdd: React.FC<
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
        d="M14.35 5.136a1.75 1.75 0 0 1 2.586-.124l5.05 5.05a1.75 1.75 0 0 1-.123 2.587l-1.736 1.433-7.21-7.21zM11.76 7.836l7.403 7.403-2.224 5.781a.75.75 0 0 1-.632.478L5.575 22.5l5.35-5.35c.43.237.875.328 1.258.362a.75.75 0 1 0 .133-1.494c-.357-.032-.658-.126-.9-.347a1 1 0 0 0-.073-.074c-.221-.241-.315-.542-.347-.899a.75.75 0 1 0-1.494.133c.034.383.125.829.361 1.259l-5.367 5.367 1.005-10.765a.75.75 0 0 1 .478-.632z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H6v2a1 1 0 0 1-2 0V6H2a1 1 0 0 1 0-2h2V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PenToolAdd;
