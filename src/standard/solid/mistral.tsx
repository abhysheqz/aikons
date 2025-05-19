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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 4.5h-3v12h-3v3h9v-3h3v3h9v-3h-3v-12h-3v3h-3v3h-3v-3h-3zm9 12h-3v-3h3zm-6 0h-3v-3h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mistral;
