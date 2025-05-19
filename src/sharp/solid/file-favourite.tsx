import React from "react";
const FileFavourite: React.FC<
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
        d="M11.258 1.602C9.362.59 8 2.08 8 2.08S6.64.591 4.743 1.601C2.446 2.827 2.28 7.622 8 9.75c5.72-2.129 5.554-6.924 3.258-8.148"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 7.918.001 14.832h10.11l7.389-7.38V1.25h-7.922c1.033 1.096 1.406 2.769 1.022 4.377-.505 2.112-2.259 4.12-5.414 5.295a1.25 1.25 0 0 1-.872 0c-1.974-.735-3.4-1.796-4.314-3.004m9.312 12.877L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileFavourite;
