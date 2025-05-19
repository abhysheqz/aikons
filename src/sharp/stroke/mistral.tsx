import React from "react";
const Mistral: React.FC<
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
        d="M10.5 16.5v3h-9v-3h3v-12h3v3h3v3h3v-3h3v-3h3v12h3v3h-9v-3m-3 0h3m-3 0h-3v-3h3zm3 0h3v-3h-3z"
      />
    </svg>
  );
};
export default Mistral;
