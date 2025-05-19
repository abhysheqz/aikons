import React from "react";
const PointingLeft_01: React.FC<
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
        d="M19.47 20.479c-.48.228-1.058.505-1.457.696-.777.372-1.943.823-3.12.999-1.14.17-2.518.115-3.46-.82-2.047-2.035-2.622-4.74-2.685-6.604H3.75a2.5 2.5 0 0 1 0-5h8.374l-.993-.945-.022-.025a2.4 2.4 0 0 1 .337-3.503 2.53 2.53 0 0 1 3.1.006l5.71 4.319h2.494v10.54h-2.576z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.457 1.75 1.25 4.957l3.207 3.207L5.871 6.75l-.793-.793h3.586v-2H5.078l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_01;
