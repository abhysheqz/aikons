import React from "react";
const AiMail: React.FC<
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
        d="m4.469 6.47 1.062 1.06-2.29 2.296 8.76 4.82 8.76-4.82-2.292-2.296 1.062-1.06 3.219 3.228V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V9.698z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 1.25h15.5v10.4h-1.5v-8.9H5.75v8.9h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.493 4.25h1.515l2.467 6.168-1.392.557-.69-1.725H9.108l-.69 1.725-1.393-.557zm.215 3.5h1.085l-.543-1.356zm6.042-3.5v6.5h-1.5v-6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiMail;
