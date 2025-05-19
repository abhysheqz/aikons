import React from "react";
const Dice: React.FC<
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
        d="M10.409 3.03a2.25 2.25 0 0 1 3.182 0l3.878 3.879a2.25 2.25 0 0 1 0 3.182L15.31 12.25h5.19a2.25 2.25 0 0 1 2.25 2.25V20a2.25 2.25 0 0 1-2.25 2.25H15A2.25 2.25 0 0 1 12.75 20v-5.5a2.26 2.26 0 0 1-1.5 0V20A2.25 2.25 0 0 1 9 22.25H3.5A2.25 2.25 0 0 1 1.25 20v-5.5a2.25 2.25 0 0 1 2.25-2.25h5.19l-2.16-2.16a2.25 2.25 0 0 1 0-3.181zm2.653 3.408c.584.584.584 1.53 0 2.115l-.01.009a1.495 1.495 0 0 1-2.114-2.115l.01-.01a1.495 1.495 0 0 1 2.114 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dice;
