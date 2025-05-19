import React from "react";
const FileUnlocked: React.FC<
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
        d="M16.496 13.75a1 1 0 0 0-1 1v1h5.25v7h-8.5v-7h1.75v-1a2.5 2.5 0 0 1 4.513-1.483l.445.604-1.207.89-.445-.603a1 1 0 0 0-.806-.408"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h7.746V14.5h1.758a3.75 3.75 0 0 1 6.761-1.975l1.187 1.975h.048V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileUnlocked;
