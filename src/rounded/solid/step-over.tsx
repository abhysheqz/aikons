import React from "react";
const StepOver: React.FC<
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
        d="M10.679 3h-.108c-1.359 0-2.454 0-3.333.09-.908.092-1.695.288-2.39.753a5 5 0 0 0-1.38 1.38c-.465.695-.661 1.482-.754 2.39-.089.879-.089 1.974-.089 3.333V17a1 1 0 1 0 2 0v-6c0-1.425.001-2.419.08-3.185.075-.75.217-1.169.426-1.482a3 3 0 0 1 .827-.827c.313-.21.733-.35 1.482-.427C8.206 5.001 9.2 5 10.625 5s2.419.001 3.185.08c.75.075 1.169.217 1.482.426a3 3 0 0 1 .827.827c.21.313.35.733.427 1.482.078.766.079 1.76.079 3.185v2.25h-2.001a.75.75 0 0 0-.567 1.24l1.617 1.875c.306.356.585.68.841.907.277.245.636.478 1.11.478s.833-.233 1.11-.479c.256-.227.535-.55.841-.906l1.617-1.875a.75.75 0 0 0-.568-1.24h-2v-2.304c0-1.359 0-2.454-.09-3.333-.092-.908-.288-1.695-.753-2.39a5 5 0 0 0-1.38-1.38c-.695-.465-1.482-.661-2.39-.754C13.133 3 12.038 3 10.68 3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.625 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StepOver;
