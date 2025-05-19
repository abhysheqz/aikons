import React from "react";
const CustomerService_01: React.FC<
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
        d="M3.918 9.554a1.93 1.93 0 0 1 2.048-.189l.928.465A2 2 0 0 1 8 11.618v4.764a2 2 0 0 1-1.106 1.79l-.928.463a1.93 1.93 0 0 1-2.048-.188c-.45-.35-1.148-.942-1.742-1.668C1.604 16.079 1 15.103 1 14s.604-2.079 1.176-2.778c.594-.727 1.292-1.318 1.742-1.668"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a7 7 0 0 0-7 7v.5a1 1 0 1 1-2 0V10a9 9 0 0 1 18 0v.5a1 1 0 1 1-2 0V10a7 7 0 0 0-7-7M20 16.5a1 1 0 0 1 1 1v.5a5 5 0 0 1-5 5h-4a1 1 0 1 1 0-2h4a3 3 0 0 0 3-3v-.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.034 9.365a1.93 1.93 0 0 1 2.048.189c.45.35 1.148.941 1.742 1.668.572.7 1.176 1.676 1.176 2.778s-.604 2.08-1.176 2.779c-.594.726-1.292 1.318-1.742 1.668a1.93 1.93 0 0 1-2.048.188l-.928-.464A2 2 0 0 1 16 16.382v-4.764a2 2 0 0 1 1.106-1.788z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerService_01;
