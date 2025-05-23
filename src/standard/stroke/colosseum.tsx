import React from "react";
const Colosseum: React.FC<
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
        d="M9.996 15 10 13m-4 2.5v-2M11.998 20.5V19M8 20.5 7.996 19"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.957 21H21a1 1 0 0 0 1-1v-3.01M16.957 21l-2.399-5.896M16.958 21H3a1 1 0 0 1-1-1v-3.01m12.559-1.886c-5.145-.432-10 .69-12.559 1.886m12.559-1.886c2.489.21 5.045.782 7.441 1.886m-7.441-1.886-2.302-5.49a.97.97 0 0 0-.922-.602q-.669.023-1.335.09M2 11V5.602a.97.97 0 0 1 .536-.875 19.5 19.5 0 0 1 4.628-1.569c.484-.1.958.19 1.111.66L10 9.101M2 11v5.99M2 11c2.428-.81 5.183-1.618 8-1.898m12 7.888v-5.405c0-.361-.193-.698-.523-.845-1.513-.672-3.762-1.108-4.477-1.24V12h-3.5"
      />
    </svg>
  );
};
export default Colosseum;
