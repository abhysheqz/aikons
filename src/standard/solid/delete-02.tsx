import React from "react";
const Delete_02: React.FC<
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
        d="M4.638 20.167 3.824 6.75l-.09-1.685a.3.3 0 0 1 .3-.316h15.96a.3.3 0 0 1 .3.321l-.118 1.68-.813 13.415a2.75 2.75 0 0 1-2.745 2.584H7.382a2.75 2.75 0 0 1-2.744-2.584M8.75 16.5a.75.75 0 0 0 1.5 0v-6a.75.75 0 1 0-1.5 0zm5.75-6.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.319 2.463a2 2 0 0 1 1.838-1.212h3.681a2 2 0 0 1 1.839 1.212l.98 2.287h4.341a1 1 0 1 1 0 2h-18a1 1 0 1 1 0-2h4.34zm5.571.909.591 1.378H9.514l.591-1.378a.2.2 0 0 1 .184-.121h3.417a.2.2 0 0 1 .184.12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Delete_02;
