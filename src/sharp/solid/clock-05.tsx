import React from "react";
const Clock_05: React.FC<
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
        d="M10.748 7h2v4.586l2.207 2.207-1.414 1.414-2.793-2.793z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.274 8c-1.466-2.967-4.495-5-8.024-5a9 9 0 0 0 0 18v2c-6.075 0-11-4.925-11-11s4.925-11 11-11c4.932 0 9.054 3.243 10.454 7.7a1 1 0 0 1-.954 1.3h-3V8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.75 10.737v1q0 .461-.04.91l-.09.996 1.992.18.09-.996q.048-.538.049-1.09v-1zm-.277 3.558-.353.936q-.204.54-.466 1.046l-.46.887 1.774.921.461-.887q.317-.61.563-1.262l.352-.936zm-1.606 3.336-.68.732q-.415.447-.881.833l-.77.638 1.274 1.54.77-.637q.57-.47 1.073-1.013l.68-.733zm-2.623 2.389-.91.416q-.436.2-.896.351l-.95.313.626 1.9.95-.313q.566-.186 1.103-.433l.91-.416z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_05;
