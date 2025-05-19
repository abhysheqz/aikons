import React from "react";
const StopLossOrder: React.FC<
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
        d="m19.414 6-3.968 3.968a4 4 0 0 1-5.478 5.478L6.414 19H2v-2h3.586l2.968-2.968a4 4 0 0 1 5.478-5.478L18 4.586zM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m12 1v-2.01h-2V13zm-3 .01V11h-2v2.01zM4 11v2.01H2V11zm3 .01v2.01H5v-2.01zM13 13v-2.01h-2V13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StopLossOrder;
