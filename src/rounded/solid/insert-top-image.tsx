import React from "react";
const InsertTopImage: React.FC<
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
        d="M2.25 16.875a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-16a1 1 0 0 1-1-1M2.25 20.875a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.054 2.125c1.133 0 2.058 0 2.79.098.763.103 1.425.325 1.954.854s.751 1.19.854 1.955c.098.73.098 1.656.098 2.79v.107c0 1.133 0 2.058-.098 2.79-.103.763-.325 1.425-.854 1.954s-1.19.751-1.955.854c-.73.098-1.657.098-2.79.098H7.947c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79v-.107c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954s1.19-.751 1.955-.854c.73-.098 1.656-.098 2.79-.098z"
      />
    </svg>
  );
};
export default InsertTopImage;
