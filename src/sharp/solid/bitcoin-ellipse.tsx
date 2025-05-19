import React from "react";
const BitcoinEllipse: React.FC<
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
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-4 6h2.25V6h1.5v1.25h1V6h1.5v1.25h.25a2.25 2.25 0 0 1 2.25 2.25v1c0 .576-.217 1.102-.573 1.5.356.398.573.924.573 1.5v1a2.25 2.25 0 0 1-2.25 2.25h-.25V18h-1.5v-1.25h-1V18h-1.5v-1.25H8v-1.5h.75v-6.5H8zm7.25 3.25a.75.75 0 0 1-.75.75h-4.25v-2.5h4.25a.75.75 0 0 1 .75.75zm-.75 2.25h-4.25v2.5h4.25a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinEllipse;
