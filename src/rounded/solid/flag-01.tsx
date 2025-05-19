import React from "react";
const Flag_01: React.FC<
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
        d="M17.9 6.597c-1.028-.59-2.54-1.192-4.45-1.952l-3.334-1.326c-1.058-.421-1.926-.766-2.628-.939-.722-.178-1.437-.218-2.085.172-.666.401-.93 1.055-1.045 1.767-.082.511-.102 1.142-.107 1.877l-.001.054v14.5a1 1 0 1 0 2 0v-4.033c0-.197 0-.296.052-.372.051-.076.143-.112.326-.185l6.822-2.714c1.91-.76 3.422-1.361 4.45-1.952 1.017-.583 1.85-1.318 1.85-2.448 0-1.131-.834-1.866-1.85-2.449"
      />
    </svg>
  );
};
export default Flag_01;
