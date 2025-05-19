import React from "react";
const Router: React.FC<
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
        d="M11.5 9a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12.5a1 1 0 0 1-1-1M7.457 3.434C8.741 2.09 10.524 1.25 12.499 1.25c1.976 0 3.76.84 5.043 2.184L16.457 4.47c-1.02-1.068-2.419-1.72-3.958-1.72-1.538 0-2.937.652-3.957 1.72zm2.25 2.356a3.85 3.85 0 0 1 2.792-1.208c1.098 0 2.085.467 2.793 1.208l-1.085 1.036a2.35 2.35 0 0 0-1.708-.744c-.66 0-1.263.279-1.707.744zM2 11.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75zM19.009 16H17v2h2.009zM13 16h2.009v2H13zm-8 2h6v-2H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Router;
