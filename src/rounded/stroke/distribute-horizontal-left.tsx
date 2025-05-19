import React from "react";
const DistributeHorizontalLeft: React.FC<
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
        d="M2 2v20M14 2v20M19.5 8.002c-.844 0-1.818-.083-2.299.75C17 9.1 17 9.568 17 10.502v3c0 .935 0 1.402.201 1.75.481.834 1.455.75 2.299.75s1.818.084 2.299-.75c.201-.348.201-.815.201-1.75v-3c0-.934 0-1.402-.201-1.75-.481-.833-1.455-.75-2.299-.75M7.498 5.002c-.844 0-1.818-.083-2.299.75-.2.348-.2.816-.2 1.75v9c0 .935 0 1.402.2 1.75.481.834 1.455.75 2.3.75.843 0 1.817.084 2.298-.75.201-.348.201-.815.201-1.75v-9c0-.934 0-1.402-.2-1.75-.482-.833-1.456-.75-2.3-.75"
      />
    </svg>
  );
};
export default DistributeHorizontalLeft;
