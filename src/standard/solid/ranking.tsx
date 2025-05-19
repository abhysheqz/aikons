import React from "react";
const Ranking: React.FC<
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
        d="M12.673 1.668a.75.75 0 0 0-1.345 0l-1.154 2.337-2.757.305a.75.75 0 0 0-.407 1.313l2.004 1.733-.529 2.488a.75.75 0 0 0 1.082.82L12 9.392l2.434 1.274a.75.75 0 0 0 1.08-.821l-.528-2.488 2.005-1.733a.75.75 0 0 0-.408-1.313l-2.757-.305zM10 12.25A1.75 1.75 0 0 0 8.25 14v.015A2 2 0 0 0 8 14H4a2 2 0 0 0-2 2v5a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2v-3a2 2 0 0 0-2-2h-4q-.127 0-.25.015V14A1.75 1.75 0 0 0 14 12.25zM8 21H4v-5h4zm12 0h-4v-3h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ranking;
