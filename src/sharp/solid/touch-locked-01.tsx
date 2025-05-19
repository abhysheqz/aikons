import React from "react";
const TouchLocked_01: React.FC<
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
        d="M17.5 13.25a2.25 2.25 0 0 0-2.25 2.25v.75h-1.5v6.5h7.5v-6.5h-1.5v-.75a2.25 2.25 0 0 0-2.25-2.25m.75 2.25v.75h-1.5v-.75a.75.75 0 0 1 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.25 1.25a2.5 2.5 0 0 0-2.5 2.5v8.374l-.946-.993-.024-.022a2.4 2.4 0 0 0-3.503.337 2.53 2.53 0 0 0 .007 3.1l4.318 5.703v2.501h4.648v-8h1.575a3.751 3.751 0 0 1 6.294-1.934 3 3 0 0 0-.766-1.383c-2.034-2.047-4.74-2.622-6.603-2.685V3.75a2.5 2.5 0 0 0-2.5-2.5"
      />
    </svg>
  );
};
export default TouchLocked_01;
