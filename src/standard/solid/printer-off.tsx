import React from "react";
const PrinterOff: React.FC<
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
        d="M8.5 1.25c-.933 0-1.883.583-2.207 1.5a.75.75 0 0 0 .2.802L9.48 6.059a.75.75 0 0 0 .508.199H17c.75 0 .75-.75.75-.75V3.5a2.25 2.25 0 0 0-2.25-2.25zm-3.5 6A3.75 3.75 0 0 0 1.25 11v6c0 .966.784 1.75 1.75 1.75h4a.75.75 0 0 0 .75-.75v-1.25H16a.75.75 0 0 0 .53-1.28l-8-8A.75.75 0 0 0 8 7.25zm7.5 0a.75.75 0 0 0-.544 1.266l9.207 9.707a.75.75 0 0 0 1.074.014c.316-.315.513-.754.513-1.237v-6A3.75 3.75 0 0 0 19 7.25zm6 3.25a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 16a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l1 1A1 1 0 0 1 18 17v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.586L15.586 17z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PrinterOff;
