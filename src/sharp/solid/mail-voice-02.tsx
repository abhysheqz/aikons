import React from "react";
const MailVoice_02: React.FC<
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
        d="M18.396 11.75c-1.445 0-2.581 1.198-2.581 2.632v1.383c0 1.434 1.136 2.632 2.58 2.632s2.582-1.198 2.582-2.632v-1.383c0-1.434-1.137-2.632-2.582-2.632"
      />
      <path
        fill="currentColor"
        d="M18.394 19.75c-1.104 0-2.086-.596-2.644-1.518l-1.71 1.036a5.13 5.13 0 0 0 3.354 2.382v1.1h2v-1.1a5.13 5.13 0 0 0 3.356-2.382l-1.71-1.036c-.56.922-1.541 1.518-2.646 1.518"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v15.807l-.837-.507c.202-.475.314-.995.314-1.535v-1.383c0-2.088-1.661-3.882-3.832-3.882s-3.83 1.794-3.83 3.882v1.383c0 .54.11 1.06.312 1.534l-2.555 1.547.548.904H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.401l6.416-4.277-.832-1.248L12 9.599z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailVoice_02;
