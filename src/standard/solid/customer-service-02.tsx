import React from "react";
const CustomerService_02: React.FC<
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
        d="M8.22 20.373a1 1 0 0 1 1.407-.152c1.29 1.039 3.455 1.039 4.746 0a1 1 0 1 1 1.254 1.558c-2.023 1.628-5.231 1.628-7.254 0a1 1 0 0 1-.152-1.406M12 3a9 9 0 0 0-9 9v4a1 1 0 1 1-2 0v-4C1 5.925 5.925 1 12 1s11 4.925 11 11v4a1 1 0 0 1-2 0v-4a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.918 11.554a1.93 1.93 0 0 1 2.048-.188l.928.464A2 2 0 0 1 8 13.618v4.764a2 2 0 0 1-1.106 1.79l-.928.463a1.93 1.93 0 0 1-2.048-.188c-.45-.35-1.148-.942-1.742-1.668C1.604 18.079 1 17.103 1 16s.604-2.079 1.176-2.778c.594-.727 1.292-1.318 1.742-1.668M18.034 11.366a1.93 1.93 0 0 1 2.048.188c.45.35 1.148.941 1.742 1.668.572.7 1.176 1.676 1.176 2.778s-.604 2.08-1.176 2.779c-.594.726-1.292 1.318-1.742 1.668a1.93 1.93 0 0 1-2.048.188l-.928-.464A2 2 0 0 1 16 18.382v-4.764a2 2 0 0 1 1.106-1.788z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerService_02;
