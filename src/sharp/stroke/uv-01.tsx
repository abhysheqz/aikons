import React from "react";
const Uv_01: React.FC<
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
        strokeWidth={1.5}
        d="M12.013 3.122 9.83 6.649l-4.01-.961a.1.1 0 0 0-.122.121l.945 3.995-3.509 2.2a.1.1 0 0 0 .001.171l3.509 2.133-.913 4.033a.1.1 0 0 0 .121.12l3.98-.937 2.174 3.499c.04.063.132.063.172 0l2.18-3.5 4 .933a.1.1 0 0 0 .12-.121l-.931-3.994 3.492-2.178a.1.1 0 0 0 0-.172L17.55 9.814l.938-3.99a.1.1 0 0 0-.12-.122l-4.017.912-2.166-3.492a.1.1 0 0 0-.172 0Z"
      />
    </svg>
  );
};
export default Uv_01;
