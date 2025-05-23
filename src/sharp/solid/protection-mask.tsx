import React from "react";
const ProtectionMask: React.FC<
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
        d="M15.118 13.639c-2.119-2.125-3.716-3.362-4.94-3.95-.67-.32-1.316-.49-1.922-.425-.65.07-1.145.397-1.478.846-.772 1.04-.588 2.302-.144 3.366.453 1.084 1.271 2.222 2.215 3.294 1.894 2.153 4.493 4.265 6.416 5.477.556.35 1.183.503 1.795.503 1.43 0 2.721-.851 3.285-2.165l2.405-5.608-2.651-4.7zm-6.792-2.38c.04-.055.066-.07.134-.078.113-.012.384.008.884.248.957.458 2.425 1.562 4.602 3.766l-.652 3.197c-1.058-.89-2.115-1.892-2.998-2.896-.886-1.006-1.548-1.96-1.883-2.763-.343-.823-.255-1.248-.087-1.474"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.353 3.25c3.9 0 7.137 2.678 7.92 6.216l1.954-.432c-.99-4.466-5.047-7.784-9.874-7.784-5.557 0-10.103 4.405-10.103 9.889a9.7 9.7 0 0 0 1.41 5.04c.336.556.541.921.673 1.28.123.337.193.701.193 1.24v3.551h2V18.7c0-.739-.1-1.34-.315-1.928-.207-.564-.507-1.079-.841-1.63a7.7 7.7 0 0 1-1.12-4.003c0-4.335 3.606-7.889 8.103-7.889"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ProtectionMask;
