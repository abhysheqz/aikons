import React from "react";
const FolderCheck: React.FC<
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
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h10.568l-1.409-1.409a2.25 2.25 0 1 1 3.182-3.182l.258.258 3.422-4.107a2.25 2.25 0 0 1 2.729-.576v-3.74A2.75 2.75 0 0 0 20 6.244z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.39 13.982a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2-2a1 1 0 1 1 1.414-1.414l1.226 1.226 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FolderCheck;
