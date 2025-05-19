import React from "react";
const DressingTable_03: React.FC<
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
        d="M2 12.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75zm9 4.5h2v-1.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.106 21.856 1.5-3 1.789.894-1.5 3zm16 .894-1.5-3 1.789-.894 1.5 3zM5 2.25v11H3v-11zM21 2.25v11h-2v-11z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.793 4.457c-1.61-1.61-3.976-1.61-5.586 0l-.293.293H4v-2h4.105c2.28-2 5.51-2 7.79 0H20v2h-4.914zM11.03 6.28l-2 2-1.06-1.06 2-2zM13.53 7.28l-4 4-1.06-1.06 4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DressingTable_03;
