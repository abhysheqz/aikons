import React from "react";
const MailBlock_01: React.FC<
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
        d="M1.25 3.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V12h-1.954V8.102L12 12.5 3.205 8.102v10.7H11v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.671 15.288 3.04 3.04a2.361 2.361 0 0 0-3.04-3.04m1.726 4.397-3.082-3.082a2.361 2.361 0 0 0 3.082 3.082m-3.871-5.22a4.25 4.25 0 1 1 5.949 6.071 4.25 4.25 0 0 1-5.95-6.072"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailBlock_01;
