import React from "react";
const LaurelWreathLeft_01: React.FC<
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
        d="M12.303 21.657c1.656.852 3.697-.151 3.697-.151s-.646-2.312-2.303-3.163c-1.656-.852-3.697.151-3.697.151s.646 2.312 2.303 3.163Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.303 17.657c1.656.852 3.697-.151 3.697-.151s-.646-2.312-2.303-3.163C9.041 13.492 7 14.494 7 14.494s.646 2.312 2.303 3.163Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.582 12.316C8.58 13.85 10.827 14 10.827 14s.59-2.28-.409-3.816C9.42 8.65 7.173 8.5 7.173 8.5s-.59 2.28.409 3.816Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.504 6.96C8.601 8.766 10.5 10 10.5 10s1.593-1.657 1.496-3.46C11.899 4.734 10 3.5 10 3.5S8.407 5.157 8.504 6.96Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.76 3.39C11.676 4.764 12.07 7 12.07 7s2.088-.014 3.17-1.39c1.083-1.375.69-3.61.69-3.61s-2.088.014-3.17 1.39Z"
      />
    </svg>
  );
};
export default LaurelWreathLeft_01;
