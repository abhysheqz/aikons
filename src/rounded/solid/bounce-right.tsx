import React from "react";
const BounceRight: React.FC<
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
        d="M15.575 9.182a1 1 0 0 1 .243 1.393c-1.983 2.822-2.942 6.77-3.593 9.726l-.01.043c-.057.26-.116.528-.183.73-.034.104-.095.27-.205.428a1.13 1.13 0 0 1-.78.488 1.13 1.13 0 0 1-.904-.285 1.7 1.7 0 0 1-.303-.37 9 9 0 0 1-.364-.684l-.02-.04C8.84 19.37 7.92 18.267 6.99 17.713c-.455-.271-.864-.384-1.216-.372-.334.012-.7.137-1.096.502a1 1 0 0 1-1.356-1.47c.713-.659 1.527-1 2.382-1.03.836-.03 1.624.242 2.311.652.99.592 1.87 1.524 2.555 2.555.658-2.8 1.684-6.382 3.612-9.125a1 1 0 0 1 1.393-.243"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M15 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
    </svg>
  );
};
export default BounceRight;
