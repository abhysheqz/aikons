import React from "react";
const EqualSign: React.FC<
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
        d="M2.75 8c0-.69.56-1.25 1.25-1.25h16a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25M2.75 16c0-.69.56-1.25 1.25-1.25h16a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EqualSign;
