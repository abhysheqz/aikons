import React from "react";
const PoliceStation: React.FC<
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
        d="M6.136 11.25H2.227c-.54 0-.977.43-.977.959V22.75h4.886v-1.917H3.205v-7.666h2.931zM17.864 13.167h2.932v7.666h-2.932v1.917h4.886V12.209a.97.97 0 0 0-.977-.959h-3.91z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.47 17.47a.75.75 0 0 1 .53-.22h4a.75.75 0 0 1 .75.75v4.75H18a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-1.048a9 9 0 0 1-.365 1.1c-.662 1.62-1.93 3.25-4.153 4.073l-.434.16-.433-.16C9.344 10.6 8.076 8.97 7.413 7.35a9 9 0 0 1-.365-1.1H6a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h3.25V18a.75.75 0 0 1 .22-.53M9 13.25v1.5h2v-1.5zm6 1.5v-1.5h-2v1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.75 22.75h2.5v-4h-2.5zM8.042 3.25c2.924 0 3.958-2 3.958-2s1.034 2 3.958 2c.217 1.688-.305 5.65-3.958 7-3.652-1.35-4.175-5.312-3.958-7"
      />
    </svg>
  );
};
export default PoliceStation;
