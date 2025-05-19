import React from "react";
const Gravity: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12M7 2v2m10-2v2M12 2v5.5m0 0c.5-.008 1.135-.938 2.06-1.997M12 7.5c-.5-.008-.815-.688-1.94-1.997"
      />
    </svg>
  );
};
export default Gravity;
