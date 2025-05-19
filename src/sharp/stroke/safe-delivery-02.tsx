import React from "react";
const SafeDelivery_02: React.FC<
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
        d="M16 22H8v-7h8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.008 17.5h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.347 2C7.327 1.89 4.013 5.257 4 9.004l15.866-.024c-.048-4.102-3.768-6.822-7.52-6.98Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4 9.004 7.868 5.968a.1.1 0 0 0 .12 0l7.878-5.993"
      />
    </svg>
  );
};
export default SafeDelivery_02;
