import React from "react";
const MailValidation_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 19H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"
      />
      <path
        fill="currentColor"
        d="M4 2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5.5a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V7.339l7.77 3.885a2.75 2.75 0 0 0 2.46 0L21 7.339V10.5a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 17a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0m8.23-2.076a.75.75 0 0 1 .096 1.056l-2.5 3a.75.75 0 0 1-1.106.05l-1.5-1.5a.75.75 0 1 1 1.06-1.06l.92.919 1.974-2.37a.75.75 0 0 1 1.056-.095"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailValidation_01;
