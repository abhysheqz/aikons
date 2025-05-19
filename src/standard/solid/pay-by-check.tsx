import React from "react";
const PayByCheck: React.FC<
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
        d="M17.47 2.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-.53.22h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .22-.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 10.25h4.2a2 2 0 0 0-.15.75v3A1.95 1.95 0 0 0 10 15.95h3a1.95 1.95 0 0 0 1.379-.571l5.129-5.129H20A2.75 2.75 0 0 1 22.75 13v6A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19v-6A2.75 2.75 0 0 1 4 10.25m8.254 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PayByCheck;
