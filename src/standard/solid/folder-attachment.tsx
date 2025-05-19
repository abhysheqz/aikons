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
        d="M17.25 13.75a.52.52 0 0 0-.5.539v3.384c0 1.171.92 2.077 2 2.077s2-.906 2-2.077v-2.461a1 1 0 1 1 2 0v2.461c0 2.228-1.767 4.077-4 4.077s-4-1.85-4-4.077V14.29c0-1.378 1.096-2.539 2.5-2.539s2.5 1.16 2.5 2.539v3.384a1 1 0 1 1-2 0V14.29a.52.52 0 0 0-.5-.539"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h11.37a5.37 5.37 0 0 1-1.87-4.077V14.29c0-2.035 1.622-3.789 3.75-3.789 1.72 0 3.109 1.145 3.579 2.658a2.24 2.24 0 0 1 1.921.037v-4.2A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderAttachment;
