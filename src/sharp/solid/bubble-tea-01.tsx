import React from "react";
const BubbleTea_01: React.FC<
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
        d="M12 4.75a5.16 5.16 0 0 0-4.79 3.242L6.697 9.28 5.304 8.72l.514-1.286a6.658 6.658 0 0 1 12.364 0l.514 1.286-1.392.558-.515-1.287A5.16 5.16 0 0 0 12 4.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 9.75H4v-1.5h16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.69 1.84-3 7-1.38-.59 3-7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 8.25a.75.75 0 0 0-.745.836l1.5 13a.75.75 0 0 0 .745.664h9a.75.75 0 0 0 .745-.664l1.5-13A.75.75 0 0 0 18 8.25zM13.002 13a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM10 15.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.991 1.5a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleTea_01;
