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
        d="M14.75 15.5a2.25 2.25 0 0 1 4.5 0v.75H20a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h.75zm3 .75h-1.5v-.75a.75.75 0 0 1 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.75 1.25a2.5 2.5 0 0 0-2.5 2.5v8.374l-.923-.97-.047-.045a2.4 2.4 0 0 0-3.503.337c-.707.91-.702 2.2.01 3.106h.001l4.462 5.704V22c0 .414.336.75.75.75h2.878a2.3 2.3 0 0 1-.128-.75v-5c0-1 .652-1.848 1.555-2.14a3.751 3.751 0 0 1 7.381-.053c.155-1.123.08-2.456-.833-3.374-2.034-2.047-4.74-2.622-6.603-2.685V3.75a2.5 2.5 0 0 0-2.5-2.5"
      />
    </svg>
  );
};
export default TouchLocked_01;
