import React from "react";
const KeyframesMultipleAdd: React.FC<
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
        d="M16.376 4.219a1 1 0 0 1 1.405.157l4.552 5.698a3.11 3.11 0 0 1 0 3.852l-4.552 5.698a1 1 0 0 1-1.562-1.248l4.551-5.699a1.11 1.11 0 0 0 0-1.354l-4.551-5.699a1 1 0 0 1 .157-1.405m-6.372.99a2.57 2.57 0 0 0-4.046.055L5.05 6.356a.09.09 0 0 0 .068.145c1.258 0 2.383 1.118 2.383 2.499v.3c0 .11.09.2.2.2h.3a2.5 2.5 0 0 1 .044 5h-.344a.2.2 0 0 0-.2.2v.3c0 1.38-1.199 2.499-2.398 2.499a.082.082 0 0 0-.062.133l.916 1.104.04.054a2.57 2.57 0 0 0 4.006 0l4.108-4.99a2.856 2.856 0 0 0 0-3.6zM6 9a1 1 0 0 0-2 0v2H2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2H6zm7.781-4.624a1 1 0 1 0-1.562 1.248l4.551 5.699c.307.383.307.97 0 1.354l-4.551 5.699a1 1 0 1 0 1.562 1.248l4.552-5.698a3.11 3.11 0 0 0 0-3.852z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframesMultipleAdd;
