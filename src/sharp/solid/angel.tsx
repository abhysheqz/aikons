import React from "react";
const Angel: React.FC<
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
        d="M3.705 4c.385.136.912.273 1.576.397 1.689.317 4.065.52 6.719.52s5.03-.203 6.719-.52A11 11 0 0 0 20.295 4a11 11 0 0 0-1.576-.397c-1.689-.317-4.065-.52-6.719-.52s-5.03.203-6.719.52A11 11 0 0 0 3.705 4m1.193-2.195C6.747 1.458 9.258 1.25 12 1.25s5.253.208 7.102.555c.916.172 1.721.387 2.32.653.298.131.597.298.835.517.24.22.493.565.493 1.025s-.253.805-.493 1.025a3.1 3.1 0 0 1-.835.517c-.599.266-1.404.481-2.32.653-1.849.347-4.36.555-7.102.555s-5.253-.208-7.102-.555c-.916-.172-1.721-.387-2.32-.653a3.1 3.1 0 0 1-.835-.517C1.503 4.805 1.25 4.46 1.25 4s.253-.805.493-1.025a3.1 3.1 0 0 1 .835-.517c.599-.266 1.404-.481 2.32-.653M2.43 7.099A10.7 10.7 0 0 0 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-1.765-.426-3.432-1.18-4.901-.66.24-1.417.425-2.191.57-1.965.37-4.572.581-7.379.581s-5.414-.212-7.379-.58c-.774-.146-1.532-.33-2.191-.571M15.5 11.75a.75.75 0 0 0-.75.75h-1.5a2.25 2.25 0 0 1 4.5 0h-1.5a.75.75 0 0 0-.75-.75m-7 0a.75.75 0 0 0-.75.75h-1.5a2.25 2.25 0 1 1 4.5 0h-1.5a.75.75 0 0 0-.75-.75m6.9 3.8a4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7l-1.2.9a5.74 5.74 0 0 0 4.6 2.3 5.74 5.74 0 0 0 4.6-2.3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Angel;
