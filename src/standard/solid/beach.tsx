import React from "react";
const Beach: React.FC<
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
        d="M2.25 17a.75.75 0 0 1 .355-.638l.11-.062q.091-.052.26-.133a8 8 0 0 1 .96-.38c.831-.272 2.035-.537 3.565-.537 2.205 0 4.072.57 5.95 1.143l.455.14c2.044.619 4.208 1.217 7.095 1.217a.75.75 0 0 1 .75.75v3.25H3a.75.75 0 0 1-.75-.75zM13.236 2.555c-3.556-1.507-7.655.16-9.157 3.72a1 1 0 0 0 .53 1.31L9.197 9.53 7.29 13.952l.211-.002c.665 0 1.3.048 1.912.128l1.626-3.767 4.597 1.95a1 1 0 0 0 1.312-.532c1.502-3.56-.158-7.667-3.711-9.174"
      />
    </svg>
  );
};
export default Beach;
