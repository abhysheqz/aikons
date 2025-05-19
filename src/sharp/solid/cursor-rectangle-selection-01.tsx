import React from "react";
const CursorRectangleSelection_01: React.FC<
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
        d="M1.25 1.25h4.375v1.944h-2.43v2.431H1.25zm6.32 0h4.86v1.944H7.57zm6.805 0h4.375v4.375h-1.944v-2.43h-2.431zM3.195 7.57v4.86H1.25V7.57zm15.555 0V10h-1.944V7.57zM3.194 14.374v2.43h2.431v1.945H1.25v-4.375zm4.375 2.43H10v1.945H7.57z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.546 22.75 9.25 9.25l13.5 4.296-4.605 2.781 4.298 4.275-1.849 1.85-4.286-4.287z"
      />
    </svg>
  );
};
export default CursorRectangleSelection_01;
