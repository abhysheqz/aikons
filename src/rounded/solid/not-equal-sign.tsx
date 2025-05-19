import React from "react";
const NotEqualSign: React.FC<
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 3A1.25 1.25 0 0 1 19 4.75l-12 16a1.25 1.25 0 1 1-2-1.5l12-16A1.25 1.25 0 0 1 18.75 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotEqualSign;
