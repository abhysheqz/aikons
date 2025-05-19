import React from "react";
const NotificationOff_03: React.FC<
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
        d="M9.461 20.409c.662.517 1.55.841 2.539.841s1.877-.325 2.538-.841l.923 1.182c-.93.727-2.145 1.16-3.461 1.16s-2.53-.433-3.462-1.16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.337 22.75 1.25 2.664 2.665 1.25l20.086 20.086zM12.002 1.25c4.465 0 8.085 3.694 8.085 8.25v2.8l2.165 3.865-.46.404a10 10 0 0 1-.951.735L6.757 3.22a7.96 7.96 0 0 1 5.245-1.97"
      />
      <path
        fill="currentColor"
        d="M12.002 19.75c-3.971 0-7.556-1.22-9.79-3.181l-.46-.404 2.164-3.864V9.5c0-1.603.448-3.099 1.222-4.364l13.395 13.395c-1.898.777-4.145 1.218-6.531 1.218"
      />
    </svg>
  );
};
export default NotificationOff_03;
