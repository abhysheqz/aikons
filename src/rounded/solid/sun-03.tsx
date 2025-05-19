import React from "react";
const Sun_03: React.FC<
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
        d="M17.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.221 4.221a1 1 0 0 1 1.415 0l1.06 1.061a1 1 0 1 1-1.414 1.414l-1.06-1.06a1 1 0 0 1 0-1.415m15.557 0a1 1 0 0 1 0 1.415l-1.06 1.06a1 1 0 1 1-1.415-1.414l1.061-1.06a1 1 0 0 1 1.414 0M1 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18.5 0a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1m-2.197 5.304a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 0 1-1.413 1.414l-1.061-1.06a1 1 0 0 1 0-1.415m-10.606 0a1 1 0 0 1 0 1.414l-1.06 1.06a1 1 0 0 1-1.415-1.414l1.06-1.06a1 1 0 0 1 1.415 0M12 19.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sun_03;
