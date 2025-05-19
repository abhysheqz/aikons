import React from "react";
const AiBrain_04: React.FC<
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
        d="M17.75 4.75a1.5 1.5 0 1 1 1.111 1.449l-1.33 1.331a.75.75 0 0 1-.531.22h-2.5v-1.5h2.19l1.11-1.112a1.5 1.5 0 0 1-.05-.388M14.5 16.25H17a.75.75 0 0 1 .53.22l1.331 1.33a1.503 1.503 0 0 1 1.889 1.45 1.5 1.5 0 1 1-2.95-.389l-1.11-1.111H14.5zM17.95 11.25a1.5 1.5 0 1 1 0 1.5H14.5v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_04;
