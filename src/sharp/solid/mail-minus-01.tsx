import React from "react";
const MailMinus_01: React.FC<
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
        d="M1.25 3.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V14.5h-1.954V8.602L12 13 3.205 8.602v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 18.5h-8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailMinus_01;
