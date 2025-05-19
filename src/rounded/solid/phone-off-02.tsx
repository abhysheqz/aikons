import React from "react";
const PhoneOff_02: React.FC<
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
        d="M19.25 6.946v8.768L5.72 2.184c.526-.516 1.182-.734 1.937-.836.73-.098 1.657-.098 2.79-.098h3.107c1.133 0 2.058 0 2.79.098.763.103 1.425.325 1.954.854s.751 1.19.854 1.955c.098.73.098 1.656.098 2.79m-14.5 0c0-.828 0-1.546.039-2.158l14.423 14.423a9 9 0 0 1-.06.632c-.103.764-.325 1.426-.854 1.955s-1.19.751-1.955.854c-.73.098-1.656.098-2.79.098h-3.107c-1.132 0-2.058 0-2.789-.098-.764-.103-1.426-.325-1.955-.854s-.75-1.19-.854-1.955c-.098-.73-.098-1.657-.098-2.79zM12 18.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 1 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PhoneOff_02;
