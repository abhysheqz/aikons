import React from "react";
const FourFinger_03: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m7.637 15.708-.02-9.424c-.031-.886.662-1.643 1.498-1.643h.047c.836 0 1.55.806 1.55 1.643v.09m0 0v5.765m0-5.764.046-1.757c0-.837.693-1.466 1.529-1.466h.051c.835 0 1.475.72 1.477 1.555l-.006 1.95m0 0v.007m0-.008c.005-.833.756-1.502 1.589-1.502h.048c.836 0 1.444.718 1.444 1.555v2.006m-3.08-2.05-.018 6.026m.017-6.027.006 1.716m3.075.335v.011m0-.011c0-.837.742-1.572 1.578-1.572h.087c.836 0 1.511.833 1.45 1.702v6.91M16.89 8.727v4.64m0-4.64v1.657m-9.301.758c-2.607 2.458-3.81 3.606-3.538 5.09.243 1.595 1.377 2.506 4.103 6.918h8.806c2.002-.063 3.107-1.641 3.045-3.216v-4.225"
      />
    </svg>
  );
};
export default FourFinger_03;
