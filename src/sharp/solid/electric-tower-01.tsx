import React from "react";
const ElectricTower_01: React.FC<
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
        d="M15.493 5.654 12.003 1 8.515 5.649l-4.97 2.958a.75.75 0 0 0-.288.308l-1.008 2 1.353.67L4.402 10h4.007L4.467 21.5H3.004V23h18v-1.5h-1.466L15.596 10h4.002l.8 1.585 1.352-.67-1.008-2a.75.75 0 0 0-.288-.308zm-1.99-.154-1.5-2-1.5 2zm2.047 1.937L17.336 8.5h-1.978zm-1.689.914-.02.149h-3.678q-.008-.075-.02-.149l-.003-.02L9.9 7h4.205l-.24 1.33zm-4.283 2.862-.69 2.012 1.799-1.244zm-3.136 9.149 1.603-4.676 2.628 1.791zm.994 1.138 4.568-3.115 4.569 3.115zm5.9-4.023 4.225 2.882-1.6-4.671zm-4.008-2.732 2.676 1.825 2.676-1.825-2.676-1.852zm5.787-1.523-1.793-1.241 1.105-.766zm-3.11-2.154L10.46 10h3.086zm-3.55-3.633L8.646 8.5H6.664z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricTower_01;
