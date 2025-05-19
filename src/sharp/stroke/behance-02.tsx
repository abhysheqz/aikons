import React from "react";
const Behance_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.512 12h2.624m-2.624 0V8.492h2.624a1.754 1.754 0 1 1 0 3.508m-2.624 0v3.508h2.624a1.754 1.754 0 0 0 0-3.508M13.595 12.995q-.01.126-.01.255c-.061 1.294.817 2.268 1.99 2.258.524 0 1.064-.16 1.432-.498m-3.412-2.015c.097-1.16.942-2.036 1.98-2.003.988.063 1.845.788 1.936 1.9a.097.097 0 0 1-.098.103zm.408-3.988h2.991"
      />
    </svg>
  );
};
export default Behance_02;
