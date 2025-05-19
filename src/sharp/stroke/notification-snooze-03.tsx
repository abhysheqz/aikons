import React from "react";
const NotificationSnooze_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.999 20.999c.796.622 1.847 1 3 1 1.152 0 2.204-.378 3-1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.499 3.999h5.5v.5l-5 5v.5h5.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.492 2.412a7.5 7.5 0 0 0-2.457-.411 7.5 7.5 0 0 0-7.5 7.496v2.911l-1.996 3.445a.096.096 0 0 0 .016.12c2.902 2.733 12.538 5.161 18.876-.019a.1.1 0 0 0 .023-.128l-1.952-3.292"
      />
    </svg>
  );
};
export default NotificationSnooze_03;
