import React from "react";
const ForgotPassword: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 14.979a1.99 1.99 0 0 1 2-1.978c1.105 0 2 .886 2 1.978 0 .394-.116.76-.317 1.069-.598.919-1.683 1.795-1.683 2.887v.495M19 22h.012"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9.001H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h11M15.5 8.999v-2.5a4.5 4.5 0 1 0-9 0v2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15.491v.01M8 15.491v.01"
      />
    </svg>
  );
};
export default ForgotPassword;
