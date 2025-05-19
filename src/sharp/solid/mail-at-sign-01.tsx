import React from "react";
const MailAtSign_01: React.FC<
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
        d="M1.25 2.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V11h-1.954V7.102L12 11.5 3.205 7.102v10.7H10v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 14.16a3.34 3.34 0 0 0 0 6.68v1.91a5.25 5.25 0 1 1 5.25-5.25v.477a2.386 2.386 0 0 1-4.13 1.63 2.386 2.386 0 1 1 1.266-2.107v.477a.477.477 0 1 0 .955 0V17.5a3.34 3.34 0 0 0-3.341-3.34m.477 3.34a.477.477 0 1 0-.954 0 .477.477 0 0 0 .954 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAtSign_01;
