import React from "react";
const Medal_01: React.FC<
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
        d="M2.227 1.25c-.259 0-.507.1-.69.278a.94.94 0 0 0-.287.673v5.843L12 12.75l10.75-4.706V2.201a.964.964 0 0 0-.977-.951zm.978 5.565V3.15H8v5.763zM16 8.914l4.796-2.1V3.152H16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.665 12.33a.75.75 0 0 1 .67 0l4 2a.75.75 0 0 1 .415.67v5a.75.75 0 0 1-.415.67l-4 2a.75.75 0 0 1-.67 0l-4-2A.75.75 0 0 1 7.25 20v-5a.75.75 0 0 1 .415-.67z"
      />
    </svg>
  );
};
export default Medal_01;
