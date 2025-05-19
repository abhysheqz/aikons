import React from "react";
const Upload_04: React.FC<
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
        d="m12 3.25 3.707 3.707-1.414 1.415L13 7.079v7.585h-2V7.08L9.707 8.372 8.293 6.957zM5.67 18.75l-.773-2.316L3 17.066l1.228 3.684h15.544L21 17.066l-1.897-.632-.772 2.316z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_04;
