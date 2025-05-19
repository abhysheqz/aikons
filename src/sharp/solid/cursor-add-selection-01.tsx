import React from "react";
const CursorAddSelection_01: React.FC<
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
        d="M16 2v3h3v2h-3v3h-2V7h-3V5h3V2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.5 4.69 5.625 1.25l-1.375 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33-2.582-2.293H12.5v-3h-3z"
      />
    </svg>
  );
};
export default CursorAddSelection_01;
