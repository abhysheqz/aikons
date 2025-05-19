import React from "react";
const Scribd: React.FC<
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
        strokeWidth={1.5}
        d="M6.494 20.98c0-2.55-2.323-3.494-3.495-3.494v-7.295c0-.014.011-.025.025-.025q.023.002.032.024c.88 2.478 3.87 3.742 4.208 4.021.198.164 2.532 1.121 4.352 2.4 2.291 1.934.89 3.627.198 4.369zM20.99 2.999h-4.51a.01.01 0 0 0-.005.018l.02.015.002.001h.001l.002.002.532.14c4.369 3.573-3.135 8.343-4.13 2.471L12.9 5.64c-1.62-1.27-5.207-2.017-5.757.147-.495 1.947 1.104 3.31 2.59 4.108.887.478 1.828.858 2.68 1.394 6.235 3.921 6.563 7.278 5.033 9.697a.01.01 0 0 0 .008.015h3.538a.01.01 0 0 0 .01-.01V3.01a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Scribd;
