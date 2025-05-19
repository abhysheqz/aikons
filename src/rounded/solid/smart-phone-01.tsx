import React from "react";
const SmartPhone_01: React.FC<
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
        d="M16.343 1.348c-.73-.098-1.656-.098-2.79-.098h-3.107c-1.133 0-2.058 0-2.79.098-.763.103-1.425.325-1.954.854s-.751 1.19-.854 1.955c-.098.73-.098 1.656-.098 2.79v10.107c0 1.133 0 2.058.098 2.79.103.763.325 1.425.854 1.954s1.19.751 1.955.854c.73.098 1.656.098 2.79.098h3.107c1.133 0 2.058 0 2.79-.098.763-.103 1.425-.325 1.954-.854s.751-1.19.854-1.955c.098-.73.098-1.657.098-2.79V6.947c0-1.133 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954s-1.19-.751-1.955-.854M12 18.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhone_01;
