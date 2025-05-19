import React from "react";
const MailVoice_01: React.FC<
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
        d="M17.396 11.75c-1.445 0-2.581 1.198-2.581 2.632v1.383c0 1.434 1.136 2.632 2.58 2.632s2.582-1.198 2.582-2.632v-1.383c0-1.434-1.137-2.632-2.582-2.632"
      />
      <path
        fill="currentColor"
        d="M17.394 19.75c-1.104 0-2.086-.596-2.644-1.518l-1.71 1.036a5.13 5.13 0 0 0 3.354 2.382v1.1h2v-1.1a5.13 5.13 0 0 0 3.356-2.382l-1.71-1.036c-.56.922-1.541 1.518-2.646 1.518M1.25 2.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V12h-1.954V7.102L12 11.5 3.205 7.102v10.7H11v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
    </svg>
  );
};
export default MailVoice_01;
