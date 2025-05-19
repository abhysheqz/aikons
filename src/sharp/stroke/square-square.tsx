import React from "react";
const SquareSquare: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h18V3H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.502 13.992c.111.312.211.543.322.863.402.786.38 1.998 1.504 2.116.394.041.756.028.82.028m-2.646-3.007c-.34-.953-.658-1.838-.747-2.046-.41-.956-.874-.956-1.895-.956m2.642 3.002c.212-.35.437-.72.65-1.052.736-1.088 1.419-1.948 2.344-1.948m-2.994 3-.014.023c-.907 1.502-1.8 2.981-2.988 2.981m11.764-6.017h-3.717c-.012 0-.017-.015-.007-.022.945-.65 2.368-1.51 2.579-1.719.837-.833.189-2.104-.847-2.194-.852-.153-1.765.399-1.765 1.279"
      />
    </svg>
  );
};
export default SquareSquare;
