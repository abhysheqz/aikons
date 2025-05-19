import React from "react";
const MailReplyAll_01: React.FC<
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
        d="M1.25 3.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V14h-1.954V8.102L12 12.5 3.205 8.102v10.7H8v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        d="m13.957 15.457-1.414-1.414-3.207 3.207 3.207 3.207 1.414-1.414-1.793-1.793z"
      />
      <path
        fill="currentColor"
        d="m17.957 15.457-1.414-1.414-3.207 3.207 3.207 3.207 1.414-1.414-.793-.793h.586a3 3 0 0 1 3 3v.5h2v-.5a5 5 0 0 0-5-5h-.586z"
      />
    </svg>
  );
};
export default MailReplyAll_01;
