import React from "react";
const ArrowDown_04: React.FC<
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
        d="M12.003 20.875c-.525 0-.92-.268-1.226-.561-.286-.273-.624-.702-.968-1.139l-.799-1.014c-.585-.742-1.074-1.364-1.374-1.881-.302-.52-.547-1.16-.254-1.823.302-.682.954-.904 1.54-.994.538-.082 1.245-.088 2.078-.088v-9.25a1 1 0 1 1 2 0v9.25c.834 0 1.543.005 2.08.088.588.09 1.24.312 1.541.994.294.663.049 1.303-.253 1.823-.3.517-.79 1.139-1.375 1.881l-.799 1.014c-.344.437-.682.866-.967 1.139-.307.293-.7.561-1.224.561"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDown_04;
