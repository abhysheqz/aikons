import React from "react";
const Audit_02: React.FC<
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
        d="m7.913 12.293-5.49 4.68a3.268 3.268 0 1 0 4.603 4.604l4.68-5.49a43 43 0 0 1-1.962-1.83 43 43 0 0 1-1.831-1.964"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.553 1.493a.75.75 0 0 1-.046 1.06l-.098.09c.316.246.734.577 1.21.967 1.056.864 2.411 2.025 3.58 3.193 1.167 1.168 2.328 2.523 3.192 3.58.387.472.717.887.963 1.203l.116-.116a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 1 1-1.06-1.06l.117-.117c-.315-.247-.73-.576-1.203-.963-1.056-.864-2.411-2.025-3.58-3.193-1.168-1.168-2.329-2.523-3.193-3.58a69 69 0 0 1-1.19-1.496.75.75 0 0 1-.928-1.174l6-5.5a.75.75 0 0 1 1.06.046"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Audit_02;
