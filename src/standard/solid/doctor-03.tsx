import React from "react";
const Doctor_03: React.FC<
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
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 12.25H6A2.75 2.75 0 0 0 3.25 15v7c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75v-7A2.75 2.75 0 0 0 18 12.25h-4a.75.75 0 0 0-.53.22L12 13.94l-1.47-1.47a.75.75 0 0 0-.53-.22M16.75 16a.75.75 0 1 0-1.5 0v.75h-.75a.75.75 0 1 0 0 1.5h.75V19a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doctor_03;
