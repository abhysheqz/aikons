import React from "react";
const ShoppingBag_02: React.FC<
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
        d="M12 3.25a3.5 3.5 0 0 0-3.5 3.5v1.5h-2v-1.5a5.5 5.5 0 1 1 11 0v1.5h-2v-1.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.567 22.491a.75.75 0 0 0 .175-.597L20.652 7.25H3.35L1.258 21.894A.75.75 0 0 0 2 22.75h20a.75.75 0 0 0 .567-.259M14 11c0 .74-.753 1.5-2 1.5s-2-.76-2-1.5H8c0 2.26 2.116 3.5 4 3.5s4-1.24 4-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBag_02;
