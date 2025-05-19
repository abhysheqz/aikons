import React from "react";
const NotificationBlock_03: React.FC<
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
        d="M11.5 21.25A3.25 3.25 0 0 1 8.25 18h-1.5a4.75 4.75 0 1 0 9.5 0h-1.5a3.25 3.25 0 0 1-3.25 3.25M18.5 5.139A2.36 2.36 0 0 0 16.3 8.363l3.061-3.061a2.4 2.4 0 0 0-.862-.163m2.198 1.498-3.061 3.061a2.361 2.361 0 0 0 3.061-3.061M14.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 1.25c-4.465 0-8.085 3.694-8.085 8.25v2.8L1.25 16.166l.46.404c2.235 1.96 5.82 3.181 9.79 3.181 3.971 0 7.556-1.22 9.79-3.181l.46-.404-1.744-3.114a5.75 5.75 0 0 1-4.282-10.587A7.93 7.93 0 0 0 11.5 1.25"
      />
    </svg>
  );
};
export default NotificationBlock_03;
