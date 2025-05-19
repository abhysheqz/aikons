import React from "react";
const ManWoman: React.FC<
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
        d="M19.5 22v-6H22v-1l-2.371-5.138a2.344 2.344 0 0 0-4.258 0L13 15v1h2.5v6zM10 16v-5.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2V16h2v6h4v-6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19.5 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default ManWoman;
