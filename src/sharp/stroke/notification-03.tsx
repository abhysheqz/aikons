import React from "react";
const Notification_03: React.FC<
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
        d="M8.999 20.999c.796.621 1.847.999 3 .999 1.152 0 2.204-.378 3-1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.537 12.403V9.494c0-4.137-3.358-7.492-7.501-7.492s-7.5 3.355-7.5 7.492v2.91L2.54 15.846a.096.096 0 0 0 .016.12c2.902 2.731 12.539 5.158 18.877-.021a.1.1 0 0 0 .024-.126z"
      />
    </svg>
  );
};
export default Notification_03;
