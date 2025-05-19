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
        d="M19.081 13.882v1.383h1.5v-1.383zm-2.162 1.383v-1.383h-1.5v1.383zM18 16.397c-.578 0-1.08-.487-1.08-1.132h-1.5c0 1.434 1.135 2.632 2.58 2.632zm1.081-1.132c0 .645-.503 1.132-1.08 1.132v1.5c1.444 0 2.58-1.198 2.58-2.632zm-1.08-2.515c.577 0 1.08.487 1.08 1.132h1.5c0-1.434-1.136-2.632-2.58-2.632zm0-1.5c-1.446 0-2.582 1.198-2.582 2.632h1.5c0-.645.503-1.132 1.081-1.132zM17.25 20v2h1.5v-2zm.75-.75c-1.198 0-2.258-.647-2.858-1.639l-1.283.777c.853 1.41 2.384 2.362 4.141 2.362zm2.858-1.639c-.6.992-1.66 1.639-2.858 1.639v1.5c1.757 0 3.288-.951 4.142-2.361z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 11V2H2v17h10"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m6 6.5 6 4 6-4" />
    </svg>
  );
};
export default MailVoice_02;
