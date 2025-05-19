import React from "react";
const TelevisionTable: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14H6c-2.482 0-3 .518-3 3v2c0 2.482.518 3 3 3h12c2.482 0 3-.518 3-3v-2c0-2.482-.518-3-3-3M7 18h1M16 18h1M6 7V6c0-1.886 0-2.828.586-3.414S8.114 2 10 2h4c1.886 0 2.828 0 3.414.586S18 4.114 18 6v1c0 1.886 0 2.828-.586 3.414S15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586S6 8.886 6 7M10.5 11l-.5 3m3.5-3 .5 3M12 14v8"
      />
    </svg>
  );
};
export default TelevisionTable;
