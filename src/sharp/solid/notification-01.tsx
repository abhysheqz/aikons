import React from "react";
const Notification_01: React.FC<
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
        d="M4.41 11.452a7.601 7.601 0 0 1 15.18 0l.002.02v2.249l1.976 2.289a.75.75 0 0 1 .182.49v3.25H2.25V16.5a.75.75 0 0 1 .182-.49l1.976-2.289v-2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M10 18.75a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notification_01;
