import React from "react";
const MailAccount_01: React.FC<
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
        d="M1.25 2.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V10.5h-1.954V7.602L12 12 3.205 7.602v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        d="M16 14.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14.25 21.5a4.25 4.25 0 0 1 8.5 0v.75h-8.5z"
      />
    </svg>
  );
};
export default MailAccount_01;
