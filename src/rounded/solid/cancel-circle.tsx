import React from "react";
const CancelCircle: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m3.707-13.043a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293a1 1 0 1 0-1.414 1.415L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CancelCircle;
