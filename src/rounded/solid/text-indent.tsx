import React from "react";
const TextIndent: React.FC<
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
        d="M10 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M2 15a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2.221 2.373a1 1 0 0 1 1.406-.152L5.17 3.464l.054.042c.607.49 1.142.92 1.517 1.32.4.427.76.964.76 1.674s-.36 1.247-.76 1.674c-.375.4-.91.83-1.517 1.32l-.054.043-1.542 1.242A1 1 0 1 1 2.373 9.22L3.915 7.98c.676-.545 1.1-.888 1.366-1.173a1.2 1.2 0 0 0 .204-.265l.014-.034L5.5 6.5v-.007l-.015-.034a1.2 1.2 0 0 0-.204-.265c-.267-.284-.69-.628-1.366-1.173L2.373 3.78a1 1 0 0 1-.152-1.406"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextIndent;
