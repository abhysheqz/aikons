import React from "react";
const NotificationCircle: React.FC<
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
      <path fill="currentColor" d="M14.75 5.25a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25q.859.001 1.683.131c.41.065.615.097.683.243.067.146-.057.347-.305.75a5.5 5.5 0 0 0 7.565 7.565c.403-.248.605-.371.75-.304s.179.272.243.683q.13.823.131 1.682c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m6-2A.75.75 0 0 1 8 9.25h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 14.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationCircle;
