import React from "react";
const ArrowExpand: React.FC<
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
        d="M9 2H2v7h2V5.414L9.586 11 11 9.586 5.414 4H9zM5.414 20H9v2H2v-7h2v3.586L9.586 13 11 14.414zM15 4h3.586L13 9.586 14.414 11 20 5.414V9h2V2h-7zM13 14.414 18.586 20H15v2h7v-7h-2v3.586L14.414 13z"
      />
    </svg>
  );
};
export default ArrowExpand;
