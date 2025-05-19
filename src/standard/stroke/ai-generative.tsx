import React from "react";
const AiGenerative: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 2 .295.797c.386 1.044.58 1.566.96 1.947.382.381.904.575 1.948.961L22 6l-.797.295c-1.044.386-1.566.58-1.947.96-.381.382-.575.904-.961 1.948L18 10l-.295-.797c-.386-1.044-.58-1.566-.96-1.947-.382-.381-.904-.575-1.948-.961L14 6l.797-.295c1.044-.386 1.566-.58 1.947-.96.381-.382.575-.904.961-1.948z"
      />
    </svg>
  );
};
export default AiGenerative;
