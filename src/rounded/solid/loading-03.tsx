import React from "react";
const Loading_03: React.FC<
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
        d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M12 17a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M17 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M19.07 4.93a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 1 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.415 0M8.465 15.535a1 1 0 0 1 0 1.414l-2.121 2.122a1 1 0 0 1-1.414-1.415l2.12-2.12a1 1 0 0 1 1.415 0M15.535 15.535a1 1 0 0 1 1.414 0l2.122 2.121a1 1 0 0 1-1.415 1.415l-2.12-2.122a1 1 0 0 1 0-1.414M4.93 4.93a1 1 0 0 1 1.414 0l2.121 2.12a1 1 0 0 1-1.414 1.415L4.93 6.344a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loading_03;
