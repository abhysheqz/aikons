import React from "react";
const MedicalFile: React.FC<
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
        d="M20.75 2.227a.975.975 0 0 0-.974-.977H9.636L2.25 8.663v13.11c0 .54.436.977.974.977h7.79v-1.954H4.196v-10.75h6.816V3.205h7.79V11h1.947z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.257 13.004a1 1 0 0 1 .975.525L20.35 17.5h1.4v2h-2a1 1 0 0 1-.882-.53l-1.279-2.396-1.485 4.726a1 1 0 0 1-1.836.17L12.15 17.5h-1.4v-2h2a1 1 0 0 1 .882.53l1.279 2.396 1.485-4.726a1 1 0 0 1 .861-.696"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicalFile;
