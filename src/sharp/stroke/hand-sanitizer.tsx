import React from "react";
const HandSanitizer: React.FC<
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
        d="M11.296 9H7.704a4 4 0 0 0-3.988 3.693L3 22h13l-.716-9.307A4 4 0 0 0 11.296 9Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9.5 13v6m3-3h-6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 9V6h-6v3M11 4.219 17 3l2 2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 10.5c0 1.105-.75 1.5-1.5 1.5s-1.5-.395-1.5-1.5S19.5 8 19.5 8 21 9.395 21 10.5ZM11 5.998v-2.5c0-.82-.672-1.486-1.491-1.493a1.5 1.5 0 0 0-1.517 1.492V6"
      />
    </svg>
  );
};
export default HandSanitizer;
