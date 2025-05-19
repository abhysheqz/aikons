import React from "react";
const BitcoinLock: React.FC<
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
        d="M12 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.75 8.25H3.25v14.5h17.5zm-8 3.833V10.75h-1.5v1.333h-2.5v1.5h.938v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.977 0 1.687-.83 1.687-1.75V16.5c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.562 2.667v-1.167h2.375c.058 0 .187.066.187.25v.667c0 .184-.129.25-.187.25zm0 1.5h2.375c.058 0 .187.066.187.25v.667c0 .184-.129.25-.187.25h-2.375z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinLock;
