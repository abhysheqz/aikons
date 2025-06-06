import React from "react";
const LaurelWreathRight_02: React.FC<
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
        d="M14.697 17.657c-1.656.852-3.697-.151-3.697-.151s.646-2.312 2.303-3.163c1.656-.851 3.697.151 3.697.151s-.646 2.312-2.303 3.163Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.418 12.316C15.42 13.85 13.173 14 13.173 14s-.59-2.28.409-3.816C14.58 8.65 16.827 8.5 16.827 8.5s.59 2.28-.409 3.816Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.496 6.96C15.399 8.766 13.5 10 13.5 10s-1.592-1.657-1.496-3.46C12.101 4.734 14 3.5 14 3.5s1.593 1.657 1.496 3.46Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.24 3.39c1.083 1.375.69 3.61.69 3.61s-2.088-.014-3.17-1.39C7.676 4.236 8.07 2 8.07 2s2.088.014 3.17 1.39Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 18H9a2 2 0 1 0 0 4h2"
      />
    </svg>
  );
};
export default LaurelWreathRight_02;
