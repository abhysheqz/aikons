import React from "react";
const KnifeBread: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.286 2.258c1.273-.084 2.678.347 3.909 1.69q.032.035.06.075.033.045.082.11c.277.369.914 1.217.91 2.376a.75.75 0 0 1-.57.725l-1.535.38-.407 2.034a.75.75 0 0 1-.735.603h-1.25v1.75a.75.75 0 0 1-.75.75h-1.414l-.358 1.432a.75.75 0 0 1-.199.35l-2.996 2.983a.75.75 0 0 1-.994.057l-1.738-1.372a.25.25 0 0 0-.348.038L6.287 20.69c-.475.559-1.118.954-1.822 1.04-.728.09-1.458-.164-2.007-.785-.9-1.019-.993-2.497.017-3.54l12.82-13.88.049-.047c.64-.578 1.708-1.14 2.942-1.22"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KnifeBread;
