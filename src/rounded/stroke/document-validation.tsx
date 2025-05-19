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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.98 7.016s.5.5 1 1.5c0 0 1.589-2.5 3-3M9.995 2.021c-2.499-.105-4.429.182-4.429.182-1.219.088-3.554.77-3.554 4.762 0 3.956-.026 8.834 0 10.779 0 1.188.735 3.96 3.281 4.108 3.095.18 8.67.219 11.228 0 .684-.039 2.964-.576 3.252-3.056.3-2.57.24-4.355.24-4.78"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 7.016c0 2.761-2.24 5-5.005 5a5 5 0 0 1-5.005-5c0-2.762 2.241-5 5.005-5a5 5 0 0 1 5.005 5ZM6.98 13.016h4M6.98 17.016h8"
      />
    </svg>
  );
};
export default DocumentValidation;
