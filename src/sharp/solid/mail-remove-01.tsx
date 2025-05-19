import React from "react";
const MailRemove_01: React.FC<
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
        d="M1.25 2.724c0-.538.437-.974.977-.974h19.546c.54 0 .977.436.977.974V12.5h-1.954V7.602L12 12 3.205 7.602v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.129 18.043-2.793 2.793 1.414 1.414 2.793-2.793 2.793 2.793 1.414-1.414-2.793-2.793 2.793-2.793-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailRemove_01;
