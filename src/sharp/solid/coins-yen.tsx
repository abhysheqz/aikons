import React from "react";
const CoinsYen: React.FC<
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
        d="M14 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m-3.084 5.72 2.335 2.905v.875H11.5v1.5h1.75v2.25h1.5v-2.25h1.75v-1.5h-1.75v-.875l2.334-2.905-1.169-.94-1.915 2.384-1.916-2.384z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsYen;
