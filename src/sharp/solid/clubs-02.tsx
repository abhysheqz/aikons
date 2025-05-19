import React from "react";
const Clubs_02: React.FC<
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
        d="M7.25 6.139C7.25 3.463 9.353 1.25 12 1.25s4.75 2.213 4.75 4.889q-.002.614-.141 1.187c2.606.058 5.141 2.157 5.141 5.02 0 1.868-.942 3.27-2.267 4.08-1.291.79-2.938 1.019-4.444.636l1.422 5.688H7.539l1.422-5.688c-1.508.383-3.155.166-4.448-.622-1.327-.809-2.263-2.213-2.263-4.094 0-2.882 2.53-4.97 5.14-5.022a5 5 0 0 1-.14-1.185"
      />
    </svg>
  );
};
export default Clubs_02;
