import React from "react";
const NotificationSnooze_01: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.999 6h5.5v.5l-5 5v.5h5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.499 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM14.999 19a3 3 0 1 1-6 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m18.827 13.926 2.17 2.474v2.56H3v-2.48l2.118-2.58v-2.567c0-2.993 3.05-6.373 6.892-6.373q.493 0 .966.069"
      />
    </svg>
  );
};
export default NotificationSnooze_01;
