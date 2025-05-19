import React from "react";
const Chair_04: React.FC<
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
        d="M5.317 1.052a1 1 0 1 0-.633 1.897q.635.212 1.344.385l.862 9.051a13 13 0 0 1-1.052-.326 1 1 0 1 0-.676 1.882q.745.268 1.596.474L5.027 21.77a1 1 0 0 0 1.947.458L7.734 19h8.533l.76 3.23a1 1 0 0 0 1.947-.459l-1.731-7.356.105-.026q.791-.195 1.49-.448a1 1 0 0 0-.676-1.882q-.493.177-1.05.326l.861-9.051q.708-.173 1.344-.385a1 1 0 1 0-.633-1.897C16.94 1.633 14.6 2 12 2s-4.94-.367-6.683-.948m9.746 11.74.864-9.065c-.927.134-1.91.221-2.927.256v8.996a22 22 0 0 0 2.063-.186M11 12.98V3.983c-1.017-.035-1.999-.122-2.926-.256l.864 9.066q.983.139 2.062.186m4.275 1.804A24 24 0 0 1 12 15a24 24 0 0 1-3.274-.217L8.204 17h7.592z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chair_04;
