import React from "react";
const AiChemistry_03: React.FC<
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
        d="M15.5 1.25v2h-1.602v3.621a8.31 8.31 0 0 1 4.84 7.108h-2.322l-.947 2.49-2.49.946v3.148l2.094.796A8.17 8.17 0 0 1 10.5 22.75c-4.557 0-8.25-3.72-8.25-8.307a8.31 8.31 0 0 1 4.852-7.572V3.25H5.5v-2zM9.046 8.222l-.648.23a6.3 6.3 0 0 0-2.45 1.594h9.106a6.3 6.3 0 0 0-2.45-1.593l-.647-.23V3.25H9.045zm8.24 7.007-.257.697c-.362.978-.477 1.244-.668 1.434-.19.19-.456.306-1.434.668l-.697.257v1.407l.697.258c.978.362 1.244.478 1.434.668s.306.456.668 1.434l.258.697h1.407l.258-.697c.362-.978.477-1.244.667-1.434s.456-.306 1.435-.668l.697-.258v-1.407l-.698-.258c-.978-.361-1.244-.477-1.434-.667s-.305-.456-.667-1.434l-.258-.697z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiChemistry_03;
