import React from "react";
const MagicWand_04: React.FC<
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
        strokeWidth={1.5}
        d="m11 11-7.586 7.586a1.414 1.414 0 0 0 2 2L13 13m-2-2 2 2m-2-2 .75-.75M13 13l.75-.75m-2-2 .75-.75 2 2-.75.75m-2-2 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.825 5.625h1.35M18.375 3l-.55 1.825-1.825.55v.25l1.825.55.55 1.825h.25l.55-1.825L21 5.625v-.25l-1.825-.55L18.625 3zM6.825 5.625h1.35M7.375 3l-.55 1.825L5 5.375v.25l1.825.55L7.375 8h.25l.55-1.825L10 5.625v-.25l-1.825-.55L7.625 3zM17.825 16.625h1.35m-.8-2.625-.55 1.825-1.825.55v.25l1.825.55.55 1.825h.25l.55-1.825 1.825-.55v-.25l-1.825-.55-.55-1.825z"
      />
    </svg>
  );
};
export default MagicWand_04;
