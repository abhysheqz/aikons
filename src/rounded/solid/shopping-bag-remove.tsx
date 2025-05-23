import React from "react";
const ShoppingBagRemove: React.FC<
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
        d="M11.875 3.125c-1.962 0-3.5 1.535-3.5 3.364v1.636a1 1 0 1 1-2 0V6.489c0-2.991 2.492-5.364 5.5-5.364s5.5 2.373 5.5 5.364v1.636a1 1 0 1 1-2 0V6.489c0-1.83-1.537-3.364-3.5-3.364"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.267 7.728c1.196-.858 2.746-1.103 4.726-1.103h3.764c2.069 0 3.633.284 4.814 1.168 1.185.886 1.846 2.27 2.375 4.113.04.138.06.207.057.257a.27.27 0 0 1-.119.224c-.04.03-.124.058-.292.113a2.5 2.5 0 0 0-.985.607L18.3 14.415c-.2.2-.3.3-.424.3s-.224-.1-.424-.3l-1.308-1.308a2.5 2.5 0 0 0-3.536 3.536l1.308 1.308c.2.2.3.3.3.424s-.1.224-.3.424l-1.308 1.308c-.64.64-.86 1.542-.66 2.362a.125.125 0 0 1-.12.156c-1.627-.005-3.26-.129-4.666-.37-1.374-.236-2.633-.602-3.428-1.153a5.1 5.1 0 0 1-1.854-2.344c-.325-.842-.307-1.751-.119-2.814.186-1.046.558-2.343 1.032-3.996l.012-.043c.553-1.925 1.258-3.311 2.463-4.177m5.608 2.147a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.082 14.168a1 1 0 0 1 0 1.414l-2.793 2.793 2.793 2.793a1 1 0 0 1-1.414 1.414l-2.793-2.793-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 1.414-1.414l2.793 2.793 2.793-2.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBagRemove;
