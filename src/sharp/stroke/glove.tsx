import React from "react";
const Glove: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.962 16.965H12.48"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.354 20.942H8.81a.1.1 0 0 1-.08-.04l-2.918-3.89c-.574-.944-2.422-2.715-2.297-3.928a2.33 2.33 0 0 1 .668-1.433c.478-.475 1.204-.655 1.864-.52.94.193 1.409 1.041 2.713 2.889V8.85c0-2.267 1.838-6.239 7.012-5.883 4.604.316 5.895 4.56 5.718 6.33L19.453 20.86a.1.1 0 0 1-.099.082Z"
      />
    </svg>
  );
};
export default Glove;
