import React from "react";
const MailLove_01: React.FC<
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
        d="M17.517 13.435c.185.077.347.165.484.252.137-.087.299-.175.484-.252.653-.273 1.576-.395 2.606.142 1.332.694 1.932 2.32 1.541 3.919-.4 1.634-1.794 3.221-4.375 4.16l-.256.094-.257-.093c-2.58-.94-3.975-2.527-4.374-4.161-.391-1.599.209-3.225 1.54-3.92 1.031-.536 1.954-.414 2.607-.141"
      />
      <path
        fill="currentColor"
        d="M1.25 3.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V12h-1.954V8.102L12 12.5 3.205 8.102v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
    </svg>
  );
};
export default MailLove_01;
