import React from "react";
const Subpoena: React.FC<
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
        d="M3.225 1.25a.974.974 0 0 0-.975.977v19.546c0 .54.437.977.975.977h17.55a.976.976 0 0 0 .975-.977V2.227a.976.976 0 0 0-.975-.977zm15.852 1.955H4.926L7.362 6.25h9.279zM12.53 9.969a.75.75 0 0 0-1.061 0l-2.5 2.5a.75.75 0 0 0 0 1.061l1.47 1.47-2.97 2.97 1.06 1.06 2.97-2.97 1.47 1.47a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Subpoena;
