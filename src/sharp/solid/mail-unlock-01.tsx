import React from "react";
const MailUnlock_01: React.FC<
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
        d="M15.75 14.5a2.75 2.75 0 0 1 4.812-1.82l-1.124.993a1.25 1.25 0 0 0-2.188.827v.75h5.5v7h-8.5v-7h1.5z"
      />
      <path
        fill="currentColor"
        d="M1.25 2.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V10.5h-1.954V7.602L12 12 3.205 7.602v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
    </svg>
  );
};
export default MailUnlock_01;
