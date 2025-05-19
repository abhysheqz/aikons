import React from "react";
const PisaTower: React.FC<
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
        d="M22 22.25H2v-1.5h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.61 13.516-.54 1.664-1.445-.405.558-1.722z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.208 1.78a.75.75 0 0 0-.93.515l-.493 1.739-1.195-.335-1.751-.545-.446 1.433 1.081.336-.918 3.581-1.132-.345-.437 1.435 1.197.365-.915 3.572-1.104-.345-.447 1.432 1.178.368-1.558 6.08a.75.75 0 0 0 .726.936h9.283a.75.75 0 0 0 .727-.564l.923-3.605.946.257.394-1.447-.967-.264.927-3.618.952.204.313-1.467-.892-.191.905-3.535.824.227.4-1.445-1.558-.43-.003-.002-1.212-.34.449-1.722a.75.75 0 0 0-.518-.91zm3.372 3.598-3.351-.94.286-1.009 3.323.96zM9.624 10.38 16.84 12.4l-.917 3.579-3.608-1.011-3.608-1.011zm.32 10.37h1.575l.614-1.904-1.428-.46zm4.52-10.573.482-1.572-1.434-.44-.492 1.608z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PisaTower;
