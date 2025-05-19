import React from "react";
const Android: React.FC<
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
        d="M20 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M15 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M9 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M4 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M7.9 1.2a1 1 0 0 1 1.4.2l1.5 2a1 1 0 1 1-1.6 1.2l-1.5-2a1 1 0 0 1 .2-1.4m8.2 0a1 1 0 0 1 .2 1.4l-1.5 2a1 1 0 0 1-1.6-1.2l1.5-2a1 1 0 0 1 1.4-.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.754 9.25h12.49a6.25 6.25 0 0 0-12.49 0M18.25 10.75H5.75V18c0 .966.784 1.75 1.75 1.75h9A1.75 1.75 0 0 0 18.25 18z"
      />
    </svg>
  );
};
export default Android;
