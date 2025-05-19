import React from "react";
const PackageRemove: React.FC<
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
        d="m17.629 19.043-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414-2.293-2.293 2.293-2.293-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.75 13.8V6a.95.95 0 0 0-.58-.867l-8.774-3.8a1 1 0 0 0-.792 0l-8.775 3.8a.95.95 0 0 0-.58.868v12.487l9.446 4.198a.75.75 0 0 0 .61 0l2.257-1.003-.347-.347 2.293-2.293-2.293-2.293 3.535-3.535 2.293 2.293zM4.626 6l1.986.861 6.375-2.76L11 3.24zm10.761-.86L9.013 7.9 11 8.762l6.374-2.76zM7.5 14 5 12.5V11l2.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageRemove;
