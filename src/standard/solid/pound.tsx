import React from "react";
const Pound: React.FC<
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
        d="M3 14a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 8.5a4.5 4.5 0 1 1 9 0 1 1 0 1 0 2 0 6.5 6.5 0 1 0-9.572 5.73c-1.212 2.624-2.862 4.936-4.85 5.864A1 1 0 0 0 5 22h11.883l.117-.003q.106-.004.28-.02c.232-.021.55-.064.916-.149.716-.167 1.685-.516 2.486-1.264a1 1 0 1 0-1.364-1.462c-.449.419-1.043.654-1.576.778a5 5 0 0 1-.868.12H8.02c1.392-1.433 2.484-3.296 3.304-5.106Q11.896 15 12.5 15a1 1 0 1 0 0-2A4.5 4.5 0 0 1 8 8.5"
      />
    </svg>
  );
};
export default Pound;
