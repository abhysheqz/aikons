import React from "react";
const BitcoinStore: React.FC<
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
        d="M2.25 20.772V9.5h1.955v10.294H13v1.956H3.227a.98.98 0 0 1-.977-.978"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.75 7.8V8a3.75 3.75 0 0 1-6.813 2.165 4 4 0 0 1-.828.713c-.91.593-2.059.872-3.109.872s-2.199-.279-3.109-.872a4 4 0 0 1-.828-.713A3.75 3.75 0 0 1 1.25 8v-.2l2-3.5V1.25h17.5V4.3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 13.25v1.333h.813c.976 0 1.687.83 1.687 1.75V17c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813v1.333h-1.5v-1.333h-2.5v-1.5h.938v-3.834h-.938v-1.5h2.5V13.25zm-1.562 2.833v1.167h2.375c.058 0 .187-.066.187-.25v-.667c0-.184-.129-.25-.187-.25zm2.375 2.667h-2.375v1.167h2.375c.058 0 .187-.066.187-.25V19c0-.184-.129-.25-.187-.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinStore;
