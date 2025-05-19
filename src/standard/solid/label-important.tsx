import React from "react";
const LabelImportant: React.FC<
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
        d="M2.227 5.608A1.75 1.75 0 0 1 3.753 3h12.735c.604 0 1.165.31 1.484.822l4.044 6.47a2.75 2.75 0 0 1 0 2.915l-4.044 6.47a1.75 1.75 0 0 1-1.484.823H3.753a1.75 1.75 0 0 1-1.526-2.608l3.455-6.142z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LabelImportant;
