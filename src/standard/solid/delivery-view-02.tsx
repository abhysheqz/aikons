import React from "react";
const DeliveryView_02: React.FC<
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
        d="M9 10.875a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M17 13.125c-1.677 0-3.105.978-4.042 1.823a11.4 11.4 0 0 0-1.534 1.705l-.034.048a.79.79 0 0 0 0 .898l.034.048q.03.043.084.116a11.441 11.441 0 0 0 1.45 1.589c.937.845 2.365 1.823 4.042 1.823s3.105-.978 4.042-1.823a11.4 11.4 0 0 0 1.534-1.705l.034-.048a.79.79 0 0 0 0-.898l-.034-.048-.084-.116a11.441 11.441 0 0 0-1.45-1.589c-.937-.845-2.365-1.823-4.042-1.823m-.192 2.403a1.603 1.603 0 1 0 0 3.204h.014a1.603 1.603 0 1 0 0-3.204zM3 6.875a1 1 0 0 1 1 1v11a1 1 0 0 0 1 1h4.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-11a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 3.875c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 21 8.625H3a1.75 1.75 0 0 1-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryView_02;
