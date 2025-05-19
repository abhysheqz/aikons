import React from "react";
const Soundcloud: React.FC<
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
        d="M10.25 6c0-.966.784-1.75 1.75-1.75 3.322 0 6.115 2.465 6.245 5.65 2.511.339 4.505 2.365 4.505 4.9 0 2.782-2.4 4.95-5.25 4.95H11a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 5.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25M5 9.13a.75.75 0 0 1 .75.75v9.028a.75.75 0 0 1-1.5 0V9.879A.75.75 0 0 1 5 9.13m-3 1.75a.75.75 0 0 1 .75.75v5.527a.75.75 0 0 1-1.5 0V11.63a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Soundcloud;
