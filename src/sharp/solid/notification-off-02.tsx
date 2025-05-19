import React from "react";
const NotificationOff_02: React.FC<
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
        d="M8.217 20A4.29 4.29 0 0 0 12 22.25 4.29 4.29 0 0 0 15.782 20z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.664 1.25 22.75 21.336l-1.414 1.414L1.25 2.664z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.596 5.597A7.2 7.2 0 0 0 4.75 9v5.307c0 .679-.214 1.467-.579 2.067-.374.616-.798.876-1.171.876v1.5h15.75zM19.765 16.23c-.317-.557-.515-1.169-.515-1.67V9A7.25 7.25 0 0 0 7.148 3.613z"
      />
    </svg>
  );
};
export default NotificationOff_02;
