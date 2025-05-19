import React from "react";
const AiBrain_01: React.FC<
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
        d="M3.414 15.399a3.75 3.75 0 0 1 0-6.798 3.751 3.751 0 0 1 2.909-4.79 3.251 3.251 0 0 1 6.427.689v15a3.25 3.25 0 0 1-6.427.69 3.75 3.75 0 0 1-2.909-4.791"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 21.25a1.75 1.75 0 0 0 1.05-3.15.75.75 0 0 1 .9-1.2c.572.43.999 1.045 1.19 1.758a2.25 2.25 0 0 0 1.286-3.323.75.75 0 0 1 .5-1.125 2.25 2.25 0 0 0 .438-4.289c-.425.502-.98.891-1.614 1.115a.75.75 0 0 1-.5-1.414 2.26 2.26 0 0 0 1.176-.958A2.25 2.25 0 0 0 17 5.25a.75.75 0 0 1-.75-.75 1.75 1.75 0 1 0-3.5 0v15c0 .967.784 1.75 1.75 1.75M20.586 8.6a3.75 3.75 0 0 1 0 6.799 3.751 3.751 0 0 1-2.909 4.79 3.251 3.251 0 0 1-6.427-.69v-15a3.25 3.25 0 0 1 6.427-.688 3.75 3.75 0 0 1 2.909 4.79"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_01;
