import React from "react";
const Pokemon: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 21c4.418 0 8-1.79 8-4 0-.977-.84-1.532-1.052-2.411-.12-.496.052-1.078.052-1.589a7 7 0 0 0-.751-3.158C20.126 8.212 22 5.606 22 3c-4.153 0-6.257 2.35-6.9 3.722a7.06 7.06 0 0 0-6.2 0C8.257 5.349 6.153 3 2 3c0 2.606 1.874 5.213 3.751 6.842A7 7 0 0 0 5 13c0 .511.172 1.093.053 1.589C4.84 15.468 4 16.023 4 17c0 2.21 3.582 4 8 4Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m10.5 16 1.5 1 1.5-1" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12.5h-.009M15.008 12.5h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 14c-1.17.408-2 1.445-2 2.66 0 .97.53 1.827 1.34 2.34"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.874 14.01c1.583.31 3.702 2.656.735 5.086"
      />
    </svg>
  );
};
export default Pokemon;
