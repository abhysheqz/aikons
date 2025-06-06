import React from "react";
const Summation_02: React.FC<
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
        d="M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5M15 14.499c-.002.528-.017.815-.15 1.03-.326.532-.976.469-1.526.469H10.8c-1.107 0-1.661 0-1.78-.327-.118-.326.303-.694 1.144-1.432l1.69-1.48c.402-.353.604-.53.604-.759 0-.23-.202-.406-.604-.759l-1.69-1.48c-.84-.737-1.262-1.106-1.143-1.432.118-.327.672-.327 1.78-.327h2.524c.55 0 1.2-.063 1.526.468.133.216.148.503.15 1.031"
      />
    </svg>
  );
};
export default Summation_02;
