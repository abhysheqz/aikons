import React from "react";
const Blockchain_06: React.FC<
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
        d="M5.872 1.349a.75.75 0 0 0-.744 0l-3.5 2A.75.75 0 0 0 1.25 4v4c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744 0l3.5-2A.75.75 0 0 0 9.75 8V4a.75.75 0 0 0-.378-.651zM4.75 6.435l-2-1.143v2.272l2 1.143zm3.5 1.13-2 1.142V6.435l2-1.143zM18.872 1.349a.75.75 0 0 0-.744 0l-3.5 2A.75.75 0 0 0 14.25 4v4c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744 0l3.5-2A.75.75 0 0 0 22.75 8V4a.75.75 0 0 0-.378-.651zM17.75 6.435l-2-1.143v2.272l2 1.143zm3.5 1.13-2 1.142V6.435l2-1.143zM12.372 13.349a.75.75 0 0 0-.744 0l-3.5 2A.75.75 0 0 0 7.75 16v4c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744 0l3.5-2A.75.75 0 0 0 16.25 20v-4a.75.75 0 0 0-.378-.651zm-1.122 5.086-2-1.143v2.272l2 1.143zm3.5 1.13-2 1.142v-2.272l2-1.143zM10.75 5.25h2.5v1.5h-2.5zM2.75 11.25v7h3.5v1.5h-5v-8.5zM22.75 11.25v8.5h-5v-1.5h3.5v-7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_06;
