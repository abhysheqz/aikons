import React from "react";
const Building_05: React.FC<
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
        d="M23 22.75H1v-2h22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 6.75h7V2a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75v3.25H6v1.5H2.25v2.5H6v1.5H2.25v2.5H6v1.5H2.25V22c0 .414.336.75.75.75h5.878A2.3 2.3 0 0 1 8.75 22z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 9a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H11a.75.75 0 0 1-.75-.75zM18 13.75h-4v-1.5h4zm0 3h-4v-1.5h4zM17 22v-3h-2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_05;
