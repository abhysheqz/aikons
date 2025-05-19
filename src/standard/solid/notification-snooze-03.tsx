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
        fill="currentColor"
        d="M15.682 20.688a.75.75 0 0 1-.22.904c-.932.726-2.146 1.157-3.462 1.157s-2.53-.43-3.461-1.157a.75.75 0 0 1-.22-.904c.044-.098.154-.14.261-.125.542.074 2.252.295 3.42.295s2.878-.22 3.42-.295c.107-.014.217.027.262.125M13.703 1.428c.155.043.18.231.103.372a2.501 2.501 0 0 0 1.516 3.607c.152.043.225.231.124.353L14.079 7.4A2.5 2.5 0 0 0 16 11.5h3.965c.157 0 .285.128.285.285 0 .277.132.536.366.77l1.414 1.415c.141.14.22.331.22.53v1.382a1.71 1.71 0 0 1-1 1.567c-1.64.738-4.726 1.801-9.25 1.801s-7.61-1.063-9.25-1.801a1.71 1.71 0 0 1-1-1.567V14.5a.75.75 0 0 1 .22-.53l1.414-1.415a1.25 1.25 0 0 0 .366-.883V9.5a8.25 8.25 0 0 1 9.953-8.072"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 3a1 1 0 0 1 1-1h5a1 1 0 0 1 .768 1.64L18.135 8H21a1 1 0 1 1 0 2h-5a1 1 0 0 1-.768-1.64L18.865 4H16a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationSnooze_03;
