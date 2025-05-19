import React from "react";
const MailEdit_01: React.FC<
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
        d="M1.25 3.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V11h-1.954V8.102L12 12.5 3.205 8.102v10.7H11v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        d="M18.97 12.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.72 5.72h-3.56v-3.56z"
      />
    </svg>
  );
};
export default MailEdit_01;
