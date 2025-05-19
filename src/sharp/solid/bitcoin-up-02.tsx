import React from "react";
const BitcoinUp_02: React.FC<
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
        d="M15.434 1.25h5.483v5.5h-1.994V4.51l-3.815 3.48a.995.995 0 0 1-1.428-.09l-2.415-2.826-6.742 4.508-1.106-1.664 7.477-5a.995.995 0 0 1 1.31.181l2.322 2.718 2.816-2.567h-1.908z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22.75a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5m.75-10.667V10.75h-1.5v1.333h-2.5v1.5h.937v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.976 0 1.687-.83 1.687-1.75V16.5c0-.362-.11-.71-.304-1 .194-.29.304-.638.304-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.562 2.667v-1.167h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinUp_02;
