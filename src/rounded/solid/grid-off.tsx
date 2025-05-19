import React from "react";
const GridOff: React.FC<
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
      <path fill="currentColor" d="M6 21V7a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0" />
      <path
        fill="currentColor"
        d="M3 16h14a1 1 0 0 1 .102 1.995L17 18H3a1 1 0 1 1 0-2"
      />
      <path
        fill="currentColor"
        d="M2.293 2.293a1 1 0 0 1 1.338-.068l.076.068 18 18 .068.076a1 1 0 0 1-1.406 1.406l-.076-.068-18-18-.068-.076a1 1 0 0 1 .068-1.338"
      />
      <path
        fill="currentColor"
        d="M16 21v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0m0-8V8h-5a1 1 0 1 1 0-2h5V3a1 1 0 1 1 2 0v3h3l.102.005a1 1 0 0 1 0 1.99L21 8h-3v5a1 1 0 1 1-2 0M7 6l.103.005a1 1 0 0 1 0 1.99L7 8H3a1 1 0 0 1 0-2z"
      />
    </svg>
  );
};
export default GridOff;
