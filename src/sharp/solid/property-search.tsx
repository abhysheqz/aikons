import React from "react";
const PropertySearch: React.FC<
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
        d="M14.25 17.89a4.14 4.14 0 1 1 7.635 2.221l1.365 1.367-1.274 1.272-1.363-1.366a4.14 4.14 0 0 1-6.363-3.494m4.14-2.34a2.34 2.34 0 1 0 0 4.68 2.34 2.34 0 0 0 0-4.68"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 1.25A.75.75 0 0 0 .75 2v4.25h19.5V2a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 7.75H.75V20c0 .414.336.75.75.75h12.027a5.64 5.64 0 0 1 6.723-8.186zM7.5 13h-2v-1.5h2zm6.62 0H9.5v-1.5h4.62zM7.5 17h-2v-1.5h2zm4.543 0H9.5v-1.5h2.543z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertySearch;
