import React from "react";
const Pin: React.FC<
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
        d="m15.52 2.266-.398-.017-2.808 4.834a104 104 0 0 1-2.83-.277c-1.001-.114-1.881.023-2.724.423-.823.39-1.57 1.012-2.346 1.802l-1.492 1.49 4.571 4.572-5.243 5.243 1.414 1.414 5.243-5.243 4.57 4.569 1.488-1.487.003-.003c.79-.775 1.412-1.523 1.802-2.346.4-.844.536-1.723.423-2.725a102 102 0 0 1-.277-2.83l4.834-2.808-.018-.398c-.075-1.714-.693-3.091-1.907-4.305-1.214-1.215-2.591-1.833-4.305-1.908"
      />
    </svg>
  );
};
export default Pin;
