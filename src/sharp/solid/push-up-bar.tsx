import React from "react";
const PushUpBar: React.FC<
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
        d="M7.5 2.5a.75.75 0 0 0-.75.75v.502H3.999a1 1 0 0 0-1 1v4.5H2v2h4v-2H4.998v-3.5H6.75v.5a.75.75 0 0 0 .472.697l2.5.998a.75.75 0 0 0 .613-.026L12 7.091l1.665.83a.75.75 0 0 0 .613.026l2.5-.998a.75.75 0 0 0 .472-.697v-.5H19v3.5h-1v2h4v-2h-1v-4.5a1 1 0 0 0-1-1h-2.75V3.25a.75.75 0 0 0-.75-.75zM7.5 12.748a.75.75 0 0 0-.75.75V14H3.999a1 1 0 0 0-1 1v4.5H2v2h4v-2H4.998V16H6.75v.5a.75.75 0 0 0 .472.697l2.5.998a.75.75 0 0 0 .613-.026L12 17.34l1.665.83a.75.75 0 0 0 .613.026l2.5-.998a.75.75 0 0 0 .472-.697V16H19v3.5h-1v2h4v-2h-1V15a1 1 0 0 0-1-1h-2.75v-.502a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default PushUpBar;
