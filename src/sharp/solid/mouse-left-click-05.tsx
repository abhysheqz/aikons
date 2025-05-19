import React from "react";
const MouseLeftClick_05: React.FC<
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
      <path fill="currentColor" d="M2.75 4.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.973 8.683A22.4 22.4 0 0 0 4.75 12c0 2.734.364 5.404 1.602 7.413C7.644 21.511 9.799 22.75 13 22.75s5.356-1.239 6.648-3.337c1.238-2.009 1.602-4.679 1.602-7.413s-.364-5.404-1.602-7.413C18.356 2.489 16.201 1.25 13 1.25c-1.32 0-2.462.21-3.44.605.344.546.574 1.17.656 1.841A6.3 6.3 0 0 1 12 3.256V5h-.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h.5V11h-5.29c.033-.86.113-1.668.246-2.413a4.5 4.5 0 0 1-1.982.096m13.025-3.066c.823 1.337 1.206 3.19 1.291 5.383H14V9.5h.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-.5V3.256c2.012.217 3.228 1.109 3.999 2.36"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_05;
