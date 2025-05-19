import React from "react";
const Blockchain_02: React.FC<
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
        d="M12.48 5.003a.97.97 0 0 0-.961 0L4.737 8.892a.97.97 0 0 0-.488.844v7.778c0 .349.187.67.488.844l6.782 3.889c.297.17.663.17.961 0l6.781-3.889a.97.97 0 0 0 .488-.844V9.736a.97.97 0 0 0-.488-.844zm-1.45 9.186L6.188 11.41v5.538l4.844 2.778zm6.782 2.76-4.844 2.778V14.19l4.844-2.778z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.64 17.357 3 2.5-1.28 1.536-3-2.5zM11 5.625v-4h2v4zM5.64 18.893l-3 2.5-1.28-1.536 3-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_02;
