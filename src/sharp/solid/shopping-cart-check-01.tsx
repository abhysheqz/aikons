import React from "react";
const ShoppingCartCheck_01: React.FC<
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
        d="M6.897 5.632h2.758l-1.7 1.7 4.545 4.546 6.246-6.246h2.528a.98.98 0 0 1 .976.973c0 2.753-.434 5.269-1.537 7.13-1.145 1.93-2.982 3.094-5.528 3.094H8.735c-.785 0-1.421.636-1.421 1.421h9.568l-.002.003.121-.003a2.25 2.25 0 1 1-2.23 1.947h-2.54q.02.15.02.303a2.25 2.25 0 1 1-4.48-.303H5.167v-.973c0-.901.228-2.088.621-2.677.345-.516.787-.87 1.219-1.111L4.377 3.197H1.75V1.25h3.417c.46 0 .858.32.954.77zM9.25 20.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m7 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M12.5 10.043l6.707-6.707-1.414-1.414L12.5 7.215l-1.293-1.293-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheck_01;
