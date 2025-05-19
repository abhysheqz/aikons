import React from "react";
const FolderManagement: React.FC<
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
        d="M18.375 10.75v1.349c.768.19 1.45.595 1.985 1.146l1.344-.825 1.046 1.705-1.369.84a4.33 4.33 0 0 1 0 2.57l1.37.84-1.047 1.705-1.343-.825a4.17 4.17 0 0 1-1.986 1.146v1.349h-2v-1.349a4.17 4.17 0 0 1-1.985-1.146l-1.344.825L12 18.375l1.369-.84a4.33 4.33 0 0 1 0-2.57L12 14.125l1.046-1.705 1.344.825a4.17 4.17 0 0 1 1.985-1.146V10.75zm-1 3.227c-1.194 0-2.2.996-2.2 2.273 0 1.276 1.006 2.273 2.2 2.273s2.2-.997 2.2-2.273-1.006-2.273-2.2-2.273"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h11.355l-2.324-3.786 1.685-1.035a5.6 5.6 0 0 1 0-1.358l-1.685-1.035 2.354-3.835 1.64 1.006q.4-.281.85-.49V9.5h4.5v1.718q.451.207.851.49l1.64-1.007.634 1.033v-5.49H12.39z"
      />
    </svg>
  );
};
export default FolderManagement;
