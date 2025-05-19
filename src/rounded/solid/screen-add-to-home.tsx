import React from "react";
const ScreenAddToHome: React.FC<
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
        d="M11.946 1.25h3.108c1.132 0 2.058 0 2.79.098.763.103 1.425.325 1.954.854s.751 1.19.854 1.955c.098.73.098 1.656.098 2.79v10.107c0 1.133 0 2.058-.098 2.79-.103.763-.325 1.425-.854 1.954s-1.19.751-1.955.854c-.73.098-1.657.098-2.79.098h-3.107c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.094-.703-.098-1.586-.098-2.661l2.785-2.785A2.25 2.25 0 0 0 13.5 14V9a2.25 2.25 0 0 0-2.25-2.25h-5c0-1.044.006-1.905.098-2.593.103-.764.325-1.426.854-1.955s1.19-.751 1.955-.854c.73-.098 1.656-.098 2.79-.098M13.5 18.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.836 10H6.25a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ScreenAddToHome;
