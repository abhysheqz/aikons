import React from "react";
const Stamp: React.FC<
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
        d="M4.25 18.5A2.75 2.75 0 0 1 7 15.75h10a2.75 2.75 0 0 1 2.75 2.75v3a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.69 13.75-.193 2.333a1 1 0 1 1-1.994-.166l.396-4.772c.03-.355-.165-.798-.622-1.308a5 5 0 1 1 7.447 0c-.458.51-.652.953-.623 1.308l.396 4.772a1 1 0 0 1-1.994.166l-.193-2.333z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stamp;
