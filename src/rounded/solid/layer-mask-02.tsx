import React from "react";
const LayerMask_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.233 3.649a8.8 8.8 0 0 0 0 16.702A9.25 9.25 0 0 0 14.5 12a9.25 9.25 0 0 0-5.267-8.351"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LayerMask_02;
