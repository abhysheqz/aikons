import React from "react";
const AiPhone_02: React.FC<
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
        d="M18.75 6.75a1.5 1.5 0 1 1 1.111 1.45l-1.33 1.33a.75.75 0 0 1-.531.22h-3v-1.5h2.69l1.11-1.111a1.5 1.5 0 0 1-.05-.389M15 14.25h3a.75.75 0 0 1 .53.22l1.331 1.33a1.503 1.503 0 0 1 1.889 1.45 1.5 1.5 0 1 1-2.95-.389l-1.11-1.111H15zM18.95 11.25a1.5 1.5 0 1 1 0 1.5H12v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 1.25v5.5H13.5v3h-3v4.5h3v3h3.25v5.5H2.25V1.25zM10.509 18H8.5v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiPhone_02;
