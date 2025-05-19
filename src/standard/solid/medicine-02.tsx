import React from "react";
const Medicine_02: React.FC<
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
        d="M20.415 11.972a6.751 6.751 0 0 0-11.59 6.76zm.756 1.296-11.59 6.76a6.751 6.751 0 0 0 11.59-6.76"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.619 1.677c2.364-1.397 5.376-.558 6.727 1.836a5.08 5.08 0 0 1-.594 5.829 1 1 0 1 1-1.504-1.318 3.08 3.08 0 0 0 .356-3.528c-.811-1.438-2.587-1.913-3.968-1.097l-4.222 2.495.946 1.597a1 1 0 1 1-1.72 1.02l-.948-1.6-4.226 2.497c-1.394.824-1.889 2.67-1.07 4.12a2.9 2.9 0 0 0 2.213 1.479 1 1 0 1 1-.218 1.988 4.9 4.9 0 0 1-3.737-2.484C1.31 12.13 2.099 9.075 4.449 7.686z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medicine_02;
