import React from "react";
const Slideshare: React.FC<
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
        d="M8.495 12.003a1.5 1.5 0 0 0 1.5-1.501A1.5 1.5 0 0 0 8.494 9a1.5 1.5 0 0 0-1.499 1.502 1.5 1.5 0 0 0 1.5 1.501M15.5 12.003a1.5 1.5 0 0 0 1.498-1.501A1.5 1.5 0 0 0 15.5 9 1.5 1.5 0 0 0 14 10.502a1.5 1.5 0 0 0 1.5 1.501"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 9V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5M2 11c1.013.986 2.936 2.202 4.934 3.109m0 0c1.137.425 1.421.4 2.037.657 2.513 1.05 1.533 4.221 2.026 6.222a.01.01 0 0 1-.01.012c-1.772-.004-5.36-.522-5.003-3.767 0-1.027.774-3.002.95-3.124M22 11c-1.01.988-2.875 2.219-4.866 3.127m0 0c-1.133.425-1.585.432-2.209.663-2.767 1.02-1.43 5.193-1.922 7.197a.01.01 0 0 0 .01.013c1.565-.05 4.594.19 4.945-2.084.093-.597.102-1.216.084-1.82-.048-1.594-.764-3.869-.908-3.97"
      />
    </svg>
  );
};
export default Slideshare;
