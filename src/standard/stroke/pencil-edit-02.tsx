import React from "react";
const PencilEdit_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.707 5.293 17.5 3.5a1 1 0 0 1 1.414 0L20.5 5.086a1 1 0 0 1 0 1.414l-1.793 1.793m-3-3L9.6 11.4a2 2 0 0 0-.526.93l-.866 3.462 3.463-.866a2 2 0 0 0 .929-.526l6.108-6.108m-3-3 3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.707 4.793h-5.5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.5"
      />
    </svg>
  );
};
export default PencilEdit_02;
