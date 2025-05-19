import React from "react";
const Bandage: React.FC<
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
        d="M5.25 2.707a3 3 0 0 1 4.243 0l8.585 8.586 3.215 3.214a3 3 0 0 1 0 4.243l-2.543 2.543a3 3 0 0 1-4.243 0l-11.8-11.8a3 3 0 0 1 0-4.243zM12 8.042 8.042 12 12 15.957 15.957 12zM14.698 2.8a2.75 2.75 0 0 1 3.84.048l2.613 2.613a2.75 2.75 0 0 1 .048 3.84l-1.156 1.215a.75.75 0 0 1-1.074.014l-5.5-5.5a.75.75 0 0 1 .014-1.074zM4.49 13.25a.75.75 0 0 1 .54.22l5.5 5.5a.75.75 0 0 1-.014 1.073l-1.215 1.156a2.75 2.75 0 0 1-3.84-.048l-2.613-2.613a2.75 2.75 0 0 1-.048-3.84l1.156-1.215a.75.75 0 0 1 .534-.233"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bandage;
