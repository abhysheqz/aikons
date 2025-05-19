import React from "react";
const MarketOrder: React.FC<
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
        d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 1.968 3.446L5 18.414 3.586 17l4.968-4.968A4 4 0 0 1 8 10m14 1V8.99h-2V11zm-3 .01V9h-2v2.01zM4 9v2.01H2V9zm3 .01v2.01H5V9.01zM13 11V8.99h-2V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MarketOrder;
