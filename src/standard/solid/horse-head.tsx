import React from "react";
const HorseHead: React.FC<
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
        d="M16.992 2.25a.75.75 0 0 1 .72.987l-.856 2.566.56.573c.689.668 1.464 1.804 1.657 3.044.115.732.44 1.401.923 1.916l1.28 1.367c.585.623.632 1.595.122 2.275l-1.34 1.619a1.635 1.635 0 0 1-2.188.394l-1.593-1.217c-.46 0-1.076-.006-1.59-.117-.714-.155-1.547-.499-2.185-1.213a3.6 3.6 0 0 0-.196.782c-.152 1.11.115 2.898 2.252 5.272A.75.75 0 0 1 14 21.75H3a.75.75 0 0 1-.75-.75c0-5.814 1.139-9.875 3.15-12.561 1.944-2.597 4.633-3.816 7.633-4.147.61-.983 1.56-1.486 2.326-1.742.436-.146 1.139-.3 1.633-.3"
      />
    </svg>
  );
};
export default HorseHead;
