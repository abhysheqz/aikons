import React from "react";
const Drag_03: React.FC<
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
        d="M9.255 4.75a2.5 2.5 0 1 1 5 0v5.5H18A3.75 3.75 0 0 1 21.75 14v5A3.75 3.75 0 0 1 18 22.75h-6.93a2.75 2.75 0 0 1-2.288-1.224l-3.999-5.995a2.49 2.49 0 0 1 3.576-3.43l.896.768zM17.793 6.707a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 .025-1.388l-.018-.02-.05-.052a52 52 0 0 0-.756-.795c-.42-.433-.973-.992-1.294-1.241a1 1 0 1 0-1.228 1.578c.057.045.14.118.239.211H16.5a1 1 0 1 0 0 2h1.586l-.293.293a1 1 0 0 0 0 1.414M5.707 1.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.414 5H7a1 1 0 0 0 0-2H5.414l.293-.293a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drag_03;
