import React from "react";
const Mail_01: React.FC<
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
        d="M1.25 3.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974v16.552a.975.975 0 0 1-.977.974H2.227a.975.975 0 0 1-.977-.974zm1.955 15.579v-10.7L12 13l8.796-4.398v10.7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mail_01;
