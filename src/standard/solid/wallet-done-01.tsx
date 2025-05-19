import React from "react";
const WalletDone_01: React.FC<
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
        d="M15.838 2.25c1.608 0 2.912 1.231 2.912 2.75v1.25H19A2.75 2.75 0 0 1 21.75 9v2.25H18A1.75 1.75 0 0 0 16.25 13v2c0 .966.784 1.75 1.75 1.75h3.75V19A2.75 2.75 0 0 1 19 21.75H7.432l5.41-5.41.153-.17a2.25 2.25 0 0 0 0-2.84l-.154-.17-.17-.155a2.25 2.25 0 0 0-2.84 0l-.172.154-4.409 4.41-.75-.69c-.595-.515-1.515-.521-2.25-.147V5c0-1.519 1.304-2.75 2.912-2.75zM5.275 4.082a1.084 1.084 0 0 0 0 2.167H16.81v-1.25c0-.506-.435-.917-.97-.917z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 15.25H18a.25.25 0 0 1-.25-.25v-2a.25.25 0 0 1 .25-.25h3.75zM10.543 14.043a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.338.069l-.076-.069-2-2-.069-.076a1 1 0 0 1 1.407-1.406l.076.068 1.293 1.293z"
      />
    </svg>
  );
};
export default WalletDone_01;
