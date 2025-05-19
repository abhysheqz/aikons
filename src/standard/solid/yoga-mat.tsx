import React from "react";
const YogaMat: React.FC<
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
        d="M13.588 4a5.55 5.55 0 0 0-3.1.94L3.45 9.923A5.5 5.5 0 0 0 6.5 20h7.167a2 2 0 0 0 1.2-.4l7.733-5.8A1 1 0 0 0 22 12h-4a1 1 0 1 0 0 2h1l-5.333 4H6.5a3.5 3.5 0 1 1 0-7c1.526 0 2.575.678 3.077 1.884.172.415.206.825.144 1.162a1.23 1.23 0 0 1-.342.666c-.186.171-.463.288-.879.288-.526 0-.884-.169-1.107-.391S7 14.03 7 13.5a1 1 0 1 0-2 0c0 .982.33 1.875.982 2.525S7.526 17 8.5 17c.855 0 1.576-.266 2.12-.717L18.6 10.3a1 1 0 0 0 .4-.8c0-1.052-.057-1.734-.526-2.601A5.55 5.55 0 0 0 13.588 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YogaMat;
