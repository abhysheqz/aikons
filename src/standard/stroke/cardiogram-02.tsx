import React from "react";
const Cardiogram_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.858 3.745C14.866 1.604 12 4.76 12 4.76S9.134 1.604 5.142 3.745C.403 6.286-.024 16.09 11.297 20.725c.447.182.96.182 1.406 0 11.321-4.634 10.894-14.439 6.155-16.98"
      />
      <path
        fill="currentColor"
        d="m6 11 .576-.48A.75.75 0 0 0 6 10.25zm2.5 3-.576.48a.75.75 0 0 0 1.22-.094zm3-5 .636-.398a.75.75 0 0 0-1.28.012zm2.5 4-.636.398a.75.75 0 0 0 .636.352zm2.5.75a.75.75 0 0 0 0-1.5zM5.424 11.48l2.5 3 1.152-.96-2.5-3zm3.72 2.906 3-5-1.287-.772-3 5zm1.72-4.988 2.5 4 1.272-.796-2.5-4zM14 13.75h2.5v-1.5H14zm-8-3.5H2v1.5h4z"
      />
    </svg>
  );
};
export default Cardiogram_02;
