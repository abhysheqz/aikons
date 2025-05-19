import React from "react";
const Motorbike_01: React.FC<
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
        d="M19.5 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 17a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 12.5a4 4 0 0 0-3.668 5.6l-1.832.8a6 6 0 0 1 6.7-8.28l-.399 1.96A4 4 0 0 0 19 12.5M4.5 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 17a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.875 7.22A1 1 0 0 1 11.5 7H15a1 1 0 0 1 .878 1.479l-3.001 5.5a1 1 0 0 1-.878.521H9.862l-2.723 2.268-1.28-1.536L8.08 13.38 6.039 11H4V9h4.65z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.42 5.5H11v-2h2a1 1 0 0 1 .868.504l4 7-1.736.992z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Motorbike_01;
