import React from "react";
const TextKerning: React.FC<
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
        d="M16.598 3.109h2.419l3.734 10.67-1.888.66-.99-2.83h-4.131l-.991 2.83-1.888-.66zm-.156 6.5h2.73l-1.365-3.902zM6.178 11.416 9.25 3.737l1.857.743-4 10a1 1 0 0 1-1.857 0l-4-10 1.857-.743zM20.25 21.75 18.69 20.5l.7-.875h-7.92v-2h7.92l-.7-.875 1.561-1.25 2.5 3.125zM8.25 15.25l5-13 1.867.718-5 13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextKerning;
