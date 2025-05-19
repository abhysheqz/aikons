import React from "react";
const AlignTop: React.FC<
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
        d="M16.502 8c.844 0 1.818-.083 2.299.75.201.348.201.815.201 1.75v1c0 .934 0 1.402-.201 1.75-.481.833-1.455.75-2.299.75s-1.818.083-2.3-.75c-.2-.348-.2-.816-.2-1.75v-1c0-.935 0-1.402.2-1.75.482-.833 1.456-.75 2.3-.75M7.502 8c.844 0 1.818-.083 2.299.75.201.348.201.815.201 1.75v7c0 .934 0 1.402-.201 1.75-.481.833-1.455.75-2.3.75-.843 0-1.817.083-2.298-.75-.201-.348-.201-.816-.201-1.75v-7c0-.935 0-1.402.2-1.75.482-.833 1.456-.75 2.3-.75M22 4H2"
      />
    </svg>
  );
};
export default AlignTop;
