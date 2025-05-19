import React from "react";
const Metro: React.FC<
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
        d="M7.207 17.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l2.5-2.5a1 1 0 0 1 1.414 0m9.586 0a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.458 6.178A5 5 0 0 1 9.39 2h5.222a5 5 0 0 1 4.932 4.178l1.32 7.917c.435 2.606-1.25 5.174-3.965 5.538-1.474.198-3.22.367-4.898.367s-3.423-.169-4.897-.367c-2.715-.364-4.4-2.932-3.966-5.537zM9.39 4a3 3 0 0 0-2.96 2.507l-.365 2.196c.814.865 1.872 1.43 2.939 1.786C10.2 10.888 11.342 11 12 11s1.799-.112 2.995-.511c1.069-.356 2.128-.923 2.942-1.79l-.366-2.192A3 3 0 0 0 14.612 4zM9 14a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm5.991 0a1 1 0 0 0 0 2H15a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Metro;
