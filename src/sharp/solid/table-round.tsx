import React from "react";
const TableRound: React.FC<
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
        d="M4.713 3.66c1.898-.569 4.474-.91 7.287-.91s5.39.341 7.287.91c.943.283 1.762.636 2.361 1.06.58.412 1.102 1.002 1.102 1.78s-.522 1.368-1.102 1.78c-.6.424-1.418.777-2.361 1.06-1.898.569-4.474.91-7.287.91s-5.39-.341-7.287-.91c-.943-.283-1.762-.636-2.361-1.06-.58-.412-1.102-1.002-1.102-1.78s.522-1.368 1.102-1.78c.6-.424 1.418-.777 2.361-1.06M9.288 17.263A.75.75 0 0 1 10 16.75h4a.75.75 0 0 1 .711.513l1 3a.75.75 0 0 1-.711.987H9a.75.75 0 0 1-.712-.987z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 9.5v8h-2v-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TableRound;
