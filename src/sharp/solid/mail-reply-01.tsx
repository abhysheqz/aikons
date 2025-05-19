import React from "react";
const MailReply_01: React.FC<
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
        d="M1.25 3.224c0-.538.437-.974.977-.974h19.546c.54 0 .977.436.977.974V13h-1.954V8.102L12 12.5 3.205 8.102v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.543 13.043 1.414 1.414-.793.793h.586a5 5 0 0 1 5 5v1.5h-2v-1.5a3 3 0 0 0-3-3h-.586l.793.793-1.414 1.414-3.207-3.207z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailReply_01;
