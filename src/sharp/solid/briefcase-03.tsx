import React from "react";
const Briefcase_03: React.FC<
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
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.587 15.282 2.75 13.438V21.5a.75.75 0 0 0 .75.75h17a.75.75 0 0 0 .75-.75v-8.061l-5.838 1.843a3.501 3.501 0 0 1-6.825 0"
      />
      <path
        fill="currentColor"
        d="M2.5 5.25a.75.75 0 0 0-.75.75v5.55L8.5 13.68V11h7v2.681l6.75-2.131V6a.75.75 0 0 0-.75-.75z"
      />
      <path fill="currentColor" d="M14 12.5h-4v2a2 2 0 1 0 4 0z" />
    </svg>
  );
};
export default Briefcase_03;
