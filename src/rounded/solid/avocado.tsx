import React from "react";
const Avocado: React.FC<
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
        d="M13.302 3.683c-.216.45-.302 1.04-.302 1.442a1 1 0 1 1-2 0c0-.597.114-1.507.499-2.308.395-.823 1.176-1.692 2.501-1.692a1 1 0 1 1 0 2c-.275 0-.494.131-.698.558"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.375c-2.75 0-5.083 2.071-5.083 4.75 0 1.136-.262 2.328-.88 3.16a6.4 6.4 0 0 0-1.287 3.84c0 3.783 3.304 6.75 7.25 6.75s7.25-2.967 7.25-6.75c0-1.43-.478-2.754-1.287-3.84-.618-.832-.88-2.024-.88-3.16 0-2.679-2.333-4.75-5.083-4.75m1.344 8.104c-.489-.128-1.133-.212-1.615.214-.234.208-.35.47-.407.7a2.8 2.8 0 0 0-.072.69v4.083c0 .224.014.464.072.69.058.23.173.493.407.7.482.427 1.126.343 1.615.214a3.74 3.74 0 0 0 0-7.29"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Avocado;
