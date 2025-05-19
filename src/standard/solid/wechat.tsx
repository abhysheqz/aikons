import React from "react";
const Wechat: React.FC<
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
        d="M1.25 9.954c0-4.35 4.02-7.704 8.75-7.704 4.439 0 8.252 2.953 8.705 6.912a9.3 9.3 0 0 0-2.655-.412c-4.136-.029-8.27 2.798-8.3 7.174-.004.554.06 1.085.18 1.59a9.4 9.4 0 0 1-2.05-.742l-3.696.863a.76.76 0 0 1-.897-.96l.967-3.125c-.678-1.089-1.004-2.262-1.004-3.596M7 5a1 1 0 0 0 0 2h.009a1 1 0 0 0 0-2zm5.991 0a1 1 0 1 0 0 2H13a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.04 10.25c-3.591-.025-6.767 2.394-6.79 5.684-.023 3.288 3.152 5.79 6.745 5.816a7.1 7.1 0 0 0 3.063-.648l2.758.625a.76.76 0 0 0 .874-1.022l-.838-2.104c.486-.718.89-1.554.897-2.573.023-3.29-3.119-5.753-6.71-5.778M14 13.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.991 0a1 1 0 1 0 0 2H18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wechat;
