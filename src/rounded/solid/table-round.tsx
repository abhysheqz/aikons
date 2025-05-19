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
        d="M4.713 3.66c1.898-.569 4.474-.91 7.287-.91s5.39.341 7.287.91c.943.283 1.762.636 2.361 1.06.58.412 1.102 1.002 1.102 1.78s-.522 1.368-1.102 1.78c-.6.424-1.418.777-2.361 1.06-1.898.569-4.474.91-7.287.91s-5.39-.341-7.287-.91c-.943-.283-1.762-.636-2.361-1.06-.58-.412-1.102-1.002-1.102-1.78s.522-1.368 1.102-1.78c.6-.424 1.418-.777 2.361-1.06M8.918 18.566c.441-.838 1.407-1.816 3.082-1.816 1.676 0 2.642.978 3.083 1.816a1.48 1.48 0 0 1-.47 1.9A4.64 4.64 0 0 1 12 21.25a4.64 4.64 0 0 1-2.613-.785 1.48 1.48 0 0 1-.47-1.9"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TableRound;
