import React from "react";
const NotificationBlock_01: React.FC<
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
        d="M9.5 18.75a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0zM13.75 9.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0m2.052-.863a2.361 2.361 0 0 0 3.061 3.061zm1.335-1.335 3.061 3.06a2.361 2.361 0 0 0-3.061-3.061M9.25 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.82 5.012a5.5 5.5 0 0 0 5.084 9.65l1.164 1.348a.75.75 0 0 1 .182.49v3.25H1.75V16.5a.75.75 0 0 1 .182-.49l1.976-2.289v-2.25l.001-.02a7.6 7.6 0 0 1 10.911-6.44"
      />
      <path fill="currentColor" d="m15.89 7.39-.022-.001.02-.02z" />
    </svg>
  );
};
export default NotificationBlock_01;
