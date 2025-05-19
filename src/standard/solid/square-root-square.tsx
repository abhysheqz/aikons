import React from "react";
const SquareRootSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM12.735 7a2 2 0 0 0-1.909 1.403l-1.54 4.932-.271-.541a2 2 0 0 0-3.203-.52l-.52.519a1 1 0 1 0 1.415 1.414l.519-.519 1.38 2.76a1 1 0 0 0 1.848-.15L12.736 9H18a1 1 0 1 0 0-2zm5.015 4.968a1 1 0 1 0-.5-1.936c-.678.175-1.216.624-1.578 1.076l-.001-.002a2.1 2.1 0 0 0-.598-.752A1.74 1.74 0 0 0 14 10a1 1 0 0 0-.122 1.993l.004.007.447.894-.529.706c-.19.252-.404.394-.55.432a1 1 0 1 0 .5 1.936c.678-.175 1.216-.623 1.578-1.075l.001.001a2.01 2.01 0 0 0 1.553 1.099 1 1 0 0 0 .242-1.985L17.118 14l-.447-.894.529-.706c.19-.252.404-.394.55-.432"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareRootSquare;
