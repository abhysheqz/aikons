import React from "react";
const CursorMagicSelection_03: React.FC<
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
        d="M8.974 1.25c.533 0 .966.432.966.966v1.93a.966.966 0 0 1-1.931 0v-1.93c0-.534.432-.966.965-.966M2.981 2.981a.966.966 0 0 1 1.366 0L5.795 4.43a.966.966 0 1 1-1.366 1.366L2.981 4.347a.966.966 0 0 1 0-1.366m11.986 0a.965.965 0 0 1 0 1.366L13.52 5.795a.965.965 0 1 1-1.366-1.366l1.449-1.448a.965.965 0 0 1 1.365 0M1.25 8.974c0-.533.432-.965.966-.965h1.93a.966.966 0 0 1 0 1.93h-1.93a.966.966 0 0 1-.966-.965m4.545 3.18a.965.965 0 0 1 0 1.365l-1.448 1.448a.965.965 0 1 1-1.366-1.365l1.448-1.449a.965.965 0 0 1 1.366 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.32 7.894c-.34-.977.599-1.914 1.575-1.574l13.919 4.838c.99.344 1.13 1.685.233 2.227l-3.46 2.09 3.798 3.775c.486.483.487 1.268.002 1.752l-1.386 1.386a1.24 1.24 0 0 1-1.75 0l-3.791-3.79-2.071 3.437c-.541.897-1.884.758-2.228-.232z"
      />
    </svg>
  );
};
export default CursorMagicSelection_03;
