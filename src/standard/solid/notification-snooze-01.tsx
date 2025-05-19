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
        fill="currentColor"
        fillRule="evenodd"
        d="M10 19c0 1.116.878 2 1.976 2C13.094 21 14 20.095 14 19h2c0 2.219-1.82 4-4.024 4C9.75 23 8 21.198 8 19zM9.728 3.553a1.75 1.75 0 0 1 1.66-2.303h1.225a1.75 1.75 0 0 1 1.66 2.303l-.56 1.684A.75.75 0 0 1 13 5.75h-2a.75.75 0 0 1-.712-.513z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.163 4.425c.077.077.079.2.008.282-.365.429-.671.976-.671 1.569 0 1.146.77 2.111 1.822 2.407.152.042.225.231.124.352l-1.367 1.64a2.5 2.5 0 0 0 1.921 4.1h4.34a.5.5 0 0 1 .391.188l.855 1.069a.75.75 0 0 1 .164.468V18A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18v-1.5a.75.75 0 0 1 .164-.468l1.836-2.295V12A7.75 7.75 0 0 1 12 4.25h1.988z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 6.275a1 1 0 0 1 1-1h5a1 1 0 0 1 .768 1.64l-3.633 4.36H21a1 1 0 1 1 0 2h-5a1 1 0 0 1-.768-1.64l3.633-4.36H16a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationSnooze_01;
