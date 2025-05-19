import React from "react";
const Spades: React.FC<
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
        d="M11.09 1.54a2.38 2.38 0 0 1 1.819 0c1.656.685 3.843 2.033 5.626 3.948 1.787 1.92 3.214 4.46 3.214 7.512 0 1.888-1.27 3.23-2.814 3.932-1.183.538-2.604.746-3.964.559q.093.24.223.51c.289.596.682 1.223 1.096 1.845.68 1.021.132 2.457-1.154 2.642-.892.128-2.073.262-3.137.262a18 18 0 0 1-2.727-.237c-1.282-.204-1.735-1.607-1.19-2.589.467-.843.838-1.695 1.027-2.445-1.384.207-2.84.002-4.046-.547C3.518 16.23 2.248 14.888 2.248 13c0-3.052 1.428-5.593 3.214-7.512 1.784-1.915 3.97-3.263 5.627-3.948"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spades;
