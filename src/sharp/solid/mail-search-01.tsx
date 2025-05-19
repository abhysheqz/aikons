import React from "react";
const MailSearch_01: React.FC<
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
        d="M1.25 2.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V11.5h-1.954V7.602L12 12 3.205 7.602v10.7H11v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.252 17.05a4.3 4.3 0 1 1 7.934 2.296l1.564 1.559-1.341 1.345-1.567-1.562a4.3 4.3 0 0 1-6.59-3.639m4.3-2.4a2.4 2.4 0 1 0 0 4.799 2.4 2.4 0 0 0 0-4.8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSearch_01;
