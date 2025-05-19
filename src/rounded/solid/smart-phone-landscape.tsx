import React from "react";
const SmartPhoneLandscape: React.FC<
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
        d="M21.798 5.702c-.529-.529-1.19-.751-1.955-.854-.73-.098-1.657-.098-2.79-.098H6.947c-1.133 0-2.058 0-2.79.098-.763.103-1.425.325-1.954.854s-.751 1.19-.854 1.955c-.098.73-.098 1.656-.098 2.79v3.107c0 1.133 0 2.058.098 2.79.103.763.325 1.425.854 1.954s1.19.751 1.955.854c.73.098 1.656.098 2.79.098h10.107c1.133 0 2.058 0 2.79-.098.763-.103 1.425-.325 1.954-.854s.751-1.19.854-1.955c.098-.73.098-1.656.098-2.79v-3.107c0-1.133 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954m-2.308 5.302a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhoneLandscape;
