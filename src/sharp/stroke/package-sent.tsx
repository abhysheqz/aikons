import React from "react";
const PackageSent: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 6 21 8l-9 4-9-4 4.5-2M6 13.5l2 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 8.01v10.003l8.971 4.008a.1.1 0 0 0 .082 0L21 18.032V8.024m-8.988 4.029v9.466M12.018 9.004V2.025M9.5 4.51l2.504-2.47 2.497 2.466"
      />
    </svg>
  );
};
export default PackageSent;
