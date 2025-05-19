import React from "react";
const DocumentValidation: React.FC<
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
        d="M1.25 2.227c0-.54.437-.977.975-.977h8.259v1.955H3.2v17.59h15.6v-6.431h1.95v7.409a.98.98 0 0 1-.975.977H2.225a.974.974 0 0 1-.975-.977z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.78 4.78-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03zM12 14H6v-2h6zM16 18H6v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DocumentValidation;
