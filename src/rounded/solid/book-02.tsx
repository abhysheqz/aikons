import React from "react";
const Book_02: React.FC<
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
        d="M11.444 1.25h1.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V17a.8.8 0 0 1-.038.235 1 1 0 0 1-.972.765 1.5 1.5 0 0 0 0 3 1 1 0 0 1 .013 2H6.21c-1.927 0-3.464-1.58-3.464-3.5q0-.084.004-.167v-9.39c0-1.837 0-3.293.153-4.432.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153M6.21 18h10.867a3.5 3.5 0 0 0-.337 1.5c0 .537.121 1.045.337 1.5H6.21c-.795 0-1.464-.658-1.464-1.5S5.416 18 6.21 18M15 7.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm-3 4a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_02;
