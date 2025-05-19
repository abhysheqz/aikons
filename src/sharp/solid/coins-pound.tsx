import React from "react";
const CoinsPound: React.FC<
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
        d="M4.032 7.6c-.184.77-.282 1.574-.282 2.4 0 5.66 4.59 10.25 10.25 10.25.826 0 1.63-.098 2.4-.282A8.75 8.75 0 1 1 4.032 7.6"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m3.24 6.197c-.218-1.32-1.558-2.57-3.34-2.097-.966.256-1.614 1.016-1.923 1.823-.269.701-.32 1.534-.04 2.267H10.5v1.5h2.09q.065.244.082.496c.035.548-.111 1.233-.772 2.114l-.9 1.2h6.5v-1.5h-3.687a4.05 4.05 0 0 0 .356-1.91 4 4 0 0 0-.046-.4H15.5v-1.5h-1.891q-.106-.213-.21-.404c-.183-.338-.206-.843-.021-1.326.183-.477.519-.807.907-.91.806-.214 1.38.318 1.475.891z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsPound;
