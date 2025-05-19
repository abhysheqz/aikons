import React from "react";
const Clock_04: React.FC<
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
        d="M11 7h2v4.586l2.207 2.207-1.414 1.414L11 12.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.974 8c1.466-2.967 4.495-5 8.024-5a9 9 0 0 1 0 18v2c6.075 0 11-4.925 11-11s-4.925-11-11-11C7.066 1 2.944 4.243 1.544 8.7a1 1 0 0 0 .954 1.3h3V8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.498 10.737v1q0 .462.04.91l.09.996-1.991.18-.09-.996a12 12 0 0 1-.049-1.09v-1zm.278 3.558.353.936q.203.541.466 1.046l.46.887-1.774.922-.461-.888q-.317-.61-.563-1.262L1.905 15zm1.606 3.336.68.733q.414.446.881.832l.77.638-1.275 1.54-.77-.637a11 11 0 0 1-1.072-1.013l-.68-.733zm2.623 2.389.91.416q.436.2.896.352l.95.312-.626 1.9-.95-.313a11 11 0 0 1-1.103-.433l-.91-.416z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_04;
