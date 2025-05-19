import React from "react";
const CursorMagicSelection_04: React.FC<
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
        d="M6.329 7.832c-.362-.941.562-1.865 1.503-1.504l14.172 5.452c1.019.391.986 1.844-.05 2.189l-5.989 1.996-1.996 5.99c-.345 1.035-1.798 1.068-2.19.05z"
      />
    </svg>
  );
};
export default CursorMagicSelection_04;
