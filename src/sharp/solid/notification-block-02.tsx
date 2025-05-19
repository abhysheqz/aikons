import React from "react";
const NotificationBlock_02: React.FC<
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
        d="M7.842 20.5a4.29 4.29 0 0 0 3.783 2.25 4.29 4.29 0 0 0 3.782-2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.875 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0m2.052-.863a2.361 2.361 0 0 0 3.061 3.061zm1.335-1.335 3.061 3.06a2.361 2.361 0 0 0-3.061-3.061"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.637 2.32a5.5 5.5 0 0 0 6.238 8.396v4.091c0 .612.296 1.387.741 2.029.218.313.45.562.657.724.104.08.352.19.352.19v1.5h-18v-1.5c.373 0 .797-.26 1.172-.876.364-.6.578-1.388.578-2.067V9.5a7.25 7.25 0 0 1 8.262-7.18"
      />
    </svg>
  );
};
export default NotificationBlock_02;
