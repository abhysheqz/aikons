import React from "react";
const Contracts: React.FC<
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
        d="M4 1.25A2.75 2.75 0 0 0 1.25 4v16A2.75 2.75 0 0 0 4 22.75h12A2.75 2.75 0 0 0 18.75 20v-4.232l-2.188 2.188a3.25 3.25 0 0 1-1.66.889l-1.907.38a1.25 1.25 0 0 1-1.47-1.47l.38-1.906a3.25 3.25 0 0 1 .89-1.661l5.955-5.956V4A2.75 2.75 0 0 0 16 1.25zm3.25 14.5a.75.75 0 0 1 .67.415l1.044 2.085H10.5a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.67-.415l-.58-1.158-.58 1.158a.75.75 0 0 1-.67.415H5a.75.75 0 0 1 0-1.5h.536l1.043-2.085a.75.75 0 0 1 .671-.415M6 5.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM5.25 10A.75.75 0 0 1 6 9.25h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m17.207-1.121-.586-.586a1 1 0 0 0-1.414 0L19.28 9.47l2 2 1.177-1.177a1 1 0 0 0 0-1.414M18.22 10.53l-4.542 4.542a2 2 0 0 0-.547 1.022L12.75 18l1.906-.381a2 2 0 0 0 1.022-.547l4.542-4.542z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contracts;
