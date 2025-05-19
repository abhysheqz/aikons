import React from "react";
const BitcoinMail: React.FC<
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
        d="M4.251 1.25h15.5v10.4h-1.5v-8.9h-12.5v8.9h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 3.75v1.333h.813c.976 0 1.687.83 1.687 1.75V7.5c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813v1.333h-1.5v-1.333h-2.5v-1.5h.938V6.583H8.75v-1.5h2.5V3.75zm-1.562 2.833V7.75h2.374c.06 0 .188-.066.188-.25v-.667c0-.184-.129-.25-.187-.25zm2.374 2.667h-2.374v1.167h2.374c.06 0 .188-.066.188-.25V9.5c0-.184-.129-.25-.187-.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMail;
