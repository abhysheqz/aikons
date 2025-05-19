import React from "react";
const WalletDone_02: React.FC<
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
        d="M10.543 14.543a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.338.069l-.076-.069-2-2-.068-.076a1 1 0 0 1 1.406-1.406l.076.068 1.293 1.293z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 7.75a2.75 2.75 0 0 1 2.75 2.75v9A2.75 2.75 0 0 1 19 22.25H7.43l5.566-5.58c.722-.788.672-2.015 0-2.84l-.326-.325c-.824-.673-2.038-.726-2.84 0l-4.58 4.563-.75-.688c-.497-.448-1.488-.498-2.25-.136V8.5l.004-.077A.75.75 0 0 1 3 7.75zm-1.5 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.776 1.75c1.09 0 1.974.884 1.974 1.974V6.5H3.383q.096-.058.197-.107l9.348-4.452.203-.083c.207-.071.425-.108.645-.108"
      />
    </svg>
  );
};
export default WalletDone_02;
