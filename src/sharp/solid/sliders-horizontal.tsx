import React from "react";
const SlidersHorizontal: React.FC<
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
        d="M10 6H4V4h6zM20 6h-7V4h7zM15 15V9h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 8V2h2v6zM11 22v-6h2v6zM20 13h-4v-2h4zM13 13H4v-2h9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 20h-8v-2h8zM9 20H4v-2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SlidersHorizontal;
