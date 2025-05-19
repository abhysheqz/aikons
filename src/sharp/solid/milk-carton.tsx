import React from "react";
const MilkCarton: React.FC<
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
        d="M7 1.25a.75.75 0 0 0-.75.75v1.19l4.06 4.06H20.35l-2.1-2.518V2a.75.75 0 0 0-.75-.75zM20.75 8.75H10.75v3.696l10.001 3.077zM20.75 17.093 10.75 14.015v8.735H20a.75.75 0 0 0 .75-.75zM9.249 22.75V8.31L5.939 5l-2.47 2.47A.75.75 0 0 0 3.25 8v14a.75.75 0 0 0 .75.75z"
      />
    </svg>
  );
};
export default MilkCarton;
