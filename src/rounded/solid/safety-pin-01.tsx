import React from "react";
const SafetyPin_01: React.FC<
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
        d="M21.126 2.874c-2.33-2.33-6.164-2.132-8.173.46L11.7 4.951c-.398.513-.522 1.098-.412 1.646.106.529.419.974.808 1.278.388.303.897.499 1.437.471.561-.028 1.097-.295 1.498-.809l.374-.48c.423-.541 1.204-.582 1.662-.123s.417 1.238-.124 1.661l-.48.374c-.513.401-.78.937-.809 1.498-.027.54.168 1.049.472 1.438.303.388.748.7 1.277.807.549.11 1.133-.014 1.646-.412l1.617-1.253c2.592-2.009 2.79-5.843.46-8.173"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 19.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.654 6.244a1 1 0 0 1 .103 1.41l-9 10.41a1 1 0 1 1-1.513-1.308l9-10.41a1 1 0 0 1 1.41-.102m5.102 5.102a1 1 0 0 1-.102 1.41l-10.41 9a1 1 0 1 1-1.308-1.512l10.41-9a1 1 0 0 1 1.41.102"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafetyPin_01;
