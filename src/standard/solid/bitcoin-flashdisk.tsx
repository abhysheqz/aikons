import React from "react";
const BitcoinFlashdisk: React.FC<
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
        d="M8 2.75a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25V6.5H8zm7 0v3.768c.848.121 1.5.85 1.5 1.732v2.629a2.248 2.248 0 0 0-3.121.621h-.629a2.25 2.25 0 0 0-1.25 4.121v2.258A2.25 2.25 0 0 0 12.75 22h.629q.19.285.457.5H10.75A5.75 5.75 0 0 1 5 16.75v-8.5a1.75 1.75 0 0 1 1.5-1.732V2.75C6.5 1.784 7.284 1 8.25 1h5c.966 0 1.75.784 1.75 1.75m-4.75.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM16 12.75a.75.75 0 0 0-1.5 0V13h-1.75a.75.75 0 0 0 0 1.5H13V19h-.25a.75.75 0 0 0 0 1.5h1.75v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 16.25 13H16zM14.5 16v-1.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H14.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinFlashdisk;
