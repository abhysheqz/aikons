import React from "react";
const KoFi: React.FC<
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
        d="M17 5.5H3a1 1 0 0 0-1 1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1h1a5 5 0 0 0 0-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 13h-1V8h1a2.5 2.5 0 0 1 0 5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.586 9.1c.78-.8 2.047-.8 2.828 0L9 9.702l.586-.6c.78-.801 2.047-.801 2.828 0 .781.8.781 2.098 0 2.899L9 15.5 5.586 12a2.087 2.087 0 0 1 0-2.9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KoFi;
