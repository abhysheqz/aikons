import React from "react";
const SortingAz_01: React.FC<
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
        d="M16.71 1 19 3.777l.003 1.86H3l.001 2h-2l-.001-3a1 1 0 0 1 1-1h14.291l-1.125-1.364zM21 18.364v-2h2l.001 3a1 1 0 0 1-1 1H7.709l1.126 1.364L7.292 23 5 20.224v-1.86zM4.778 8H7.22l2.228 6.684-1.898.632L6 10.662l-1.551 4.654-1.898-.632zM13.5 13h-3v-2h3zM17.72 10.5h-2.233v-2h5v1.876L17.752 13.5h2.236v2h-5.002v-1.875z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingAz_01;
