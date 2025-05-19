import React from "react";
const FolderAttachment: React.FC<
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
        d="M17.25 13.75a.52.52 0 0 0-.5.539v3.384c0 1.171.92 2.077 2 2.077s2-.906 2-2.077v-3.461h2v3.461c0 2.228-1.767 4.077-4 4.077s-4-1.85-4-4.077V14.29c0-1.378 1.096-2.539 2.5-2.539s2.5 1.16 2.5 2.539v3.384h-2V14.29a.52.52 0 0 0-.5-.539"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h14.12a5.37 5.37 0 0 1-1.87-4.077V14.29c0-2.035 1.622-3.789 3.75-3.789 1.644 0 2.986 1.047 3.512 2.461h1.988V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderAttachment;
