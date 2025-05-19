import React from "react";
const Twitter: React.FC<
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
        d="M18.825 4.228c-1.044-.697-2.07-1.005-3.038-.976-1.046.03-1.95.453-2.655 1.067-1.131.984-1.824 2.52-1.839 3.939-1.508-.056-2.96-.635-4.201-1.442-1.454-.945-2.537-2.151-3.015-3.024a.76.76 0 0 0-1.401.171C1.488 8.443 2.608 13.434 5.4 16.39c-.608.557-1.754 1.353-3.396 1.363a.76.76 0 0 0-.376 1.418c4.017 2.318 8.8 1.929 12.553-.158 3.705-2.06 6.5-5.83 6.572-10.44l1.904-3.716a.76.76 0 0 0-.792-1.097z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Twitter;
