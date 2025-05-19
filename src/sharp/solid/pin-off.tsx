import React from "react";
const PinOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM15.52 2.267l-.398-.017-2.808 4.834a104 104 0 0 1-1.87-.175l6.646 6.647a110 110 0 0 1-.174-1.87l4.834-2.808-.018-.398c-.075-1.714-.693-3.091-1.907-4.306s-2.591-1.832-4.305-1.907"
      />
      <path
        fill="currentColor"
        d="M6.76 7.23c-.823.39-1.57 1.012-2.346 1.802l-1.492 1.49 4.571 4.572-5.243 5.243 1.414 1.414 5.243-5.243 4.57 4.569 1.488-1.487.003-.003c.79-.775 1.412-1.523 1.802-2.346q.078-.163.142-.328L7.087 7.088q-.165.064-.327.142"
      />
    </svg>
  );
};
export default PinOff;
