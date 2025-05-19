import React from "react";
const Nike: React.FC<
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
        d="m22.534 7.526-.004.004-.008.007c-.66.587-2.617 2.321-3.867 3.249a52.4 52.4 0 0 1-10.862 6.172c-2.126.892-3.803 1.043-4.982.39-1.226-.68-1.594-2.036-1.559-3.346.036-1.331.48-2.83 1.136-4.173.654-1.34 1.557-2.6 2.576-3.415a.75.75 0 0 1 1.173.844c-.231.63-.425 1.34-.496 2.003-.074.68-.01 1.22.18 1.584.16.308.448.569 1.083.64.683.076 1.743-.076 3.325-.684h.002l11.496-4.5a.75.75 0 0 1 .81 1.223z"
      />
    </svg>
  );
};
export default Nike;
