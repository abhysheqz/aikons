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
        d="M8.217 20.5A4.29 4.29 0 0 0 12 22.75a4.29 4.29 0 0 0 3.783-2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0m2.052-.863a2.361 2.361 0 0 0 3.061 3.061zm1.335-1.335 3.061 3.06a2.361 2.361 0 0 0-3.061-3.061"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.012 2.32a5.5 5.5 0 0 0 6.238 8.396v4.091c0 1.32.803 2.507 2.029 2.997A.75.75 0 0 1 21 19.25H3a.75.75 0 0 1-.279-1.446 3.23 3.23 0 0 0 2.029-2.997V9.5a7.25 7.25 0 0 1 8.262-7.18"
      />
    </svg>
  );
};
export default NotificationBlock_02;
