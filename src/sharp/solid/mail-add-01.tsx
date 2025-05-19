import React from "react";
const MailAdd_01: React.FC<
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
        d="M1.25 3.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V14h-1.954V8.102L12 12.5 3.205 8.102v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 18.75v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAdd_01;
