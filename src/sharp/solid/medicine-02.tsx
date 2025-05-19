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
        d="M14.553 1.905c2.305-1.354 5.242-.54 6.56 1.78a4.9 4.9 0 0 1-.58 5.648l-1.466-1.278a2.97 2.97 0 0 0 .347-3.418c-.791-1.394-2.523-1.854-3.869-1.063l-4.117 2.418.923 1.547-1.677.988-.925-1.55-4.12 2.42c-1.359.799-1.841 2.587-1.043 3.993a2.83 2.83 0 0 0 2.158 1.432L6.53 16.75a4.78 4.78 0 0 1-3.643-2.407c-1.31-2.307-.542-5.268 1.75-6.613z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.432 11.995a6.751 6.751 0 0 0-11.62 6.709zM21.182 13.294l-11.62 6.709a6.75 6.75 0 0 0 11.62-6.709"
      />
    </svg>
  );
};
export default Medicine_02;
