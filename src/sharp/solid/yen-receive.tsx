import React from "react";
const YenReceive: React.FC<
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
        d="M6.774 10.957 1.5 4.517 3.047 3.25l4.727 5.771L12.5 3.25l1.547 1.267-5.273 6.44v9.793h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.273 14.384h-9v-2h9zM12.273 18.384h-9v-2h9zM17.414 14.384l.793.793-1.414 1.414-3.207-3.207 3.207-3.207 1.414 1.414-.793.793H22.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenReceive;
