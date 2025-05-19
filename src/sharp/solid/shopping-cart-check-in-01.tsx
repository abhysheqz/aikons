import React from "react";
const ShoppingCartCheckIn_01: React.FC<
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
        d="m7.954 7.707 5.546 5.546 5.546-5.546-2.076-2.075h4.304a.98.98 0 0 1 .976.973c0 2.753-.434 5.269-1.537 7.13-1.145 1.93-2.982 3.094-5.528 3.094H8.735c-.785 0-1.421.636-1.421 1.421h9.568l-.002.003.121-.003a2.25 2.25 0 1 1-2.23 1.947h-2.54q.02.15.02.303a2.25 2.25 0 1 1-4.48-.303H5.167v-.973c0-.901.228-2.088.621-2.677.345-.516.787-.87 1.219-1.111L4.377 3.197H1.75V1.25h3.417c.46 0 .858.32.954.77l.776 3.612h3.133zM9.25 20.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m7 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m.957-12.793L13.5 11.414 9.793 7.707l1.414-1.414L12.5 7.586V2h2v5.586l1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheckIn_01;
