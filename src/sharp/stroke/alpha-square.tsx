import React from "react";
const AlphaSquare: React.FC<
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
        d="M3 21h18V3H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.018 14.485c-.096.639-.196.775-.321 1.032-.386 1.008-1.784.263-2.089-.837-.08-.29-.24-.973-.409-1.719m0 0c-.206-.908-.427-1.91-.541-2.41-.51-1.743-1.887-2.611-3.236-2.547-1.195.056-2.447.826-3.087 2.297-.357.822-.389 1.635-.28 2.353.149.97.59 1.778 1.153 2.314 1.067 1.015 2.5 1.213 3.571.793.847-.333 1.441-.998 1.879-1.726.208-.346.388-.707.542-1.074Zm0 0c.776-1.847.906-3.85.803-4.957"
      />
    </svg>
  );
};
export default AlphaSquare;
