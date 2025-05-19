import React from "react";
const Perfume: React.FC<
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
        d="M18.75 1a3.75 3.75 0 0 0-3.315 1.996H11.33A1.75 1.75 0 0 0 9.75 2h-1c-.697 0-1.3.408-1.58.998L5.248 3a.75.75 0 1 0 .002 1.5L7 4.497v.671c-.591.281-1 .884-1 1.582v1.475c-1.056.448-2.103 1.274-2.956 2.31-.958 1.162-1.716 2.641-1.965 4.262C.605 17.87 2.378 20.706 3.5 21.96c.333.372.798.541 1.242.541h9.015c.444 0 .909-.169 1.242-.54 1.123-1.255 2.895-4.09 2.422-7.163-.25-1.62-1.007-3.1-1.965-4.263-.854-1.035-1.9-1.86-2.957-2.309V6.75c0-.698-.409-1.3-1-1.582v-.672h3.508A3.75 3.75 0 1 0 18.75 1M11 8V6.75a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Perfume;
