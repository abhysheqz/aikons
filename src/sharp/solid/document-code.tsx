import React from "react";
const DocumentCode: React.FC<
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
        d="M20.25 2.227a.975.975 0 0 0-.974-.977H9.136L1.75 8.663v13.11c0 .54.436.977.974.977h6.789v-1.955H3.697v-10.75h6.816v-6.84h7.79V13h1.947z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.422 19.043-2.293-2.293 1.414-1.414 3.707 3.707-3.707 3.707-1.414-1.414zM13.25 19.043l2.293-2.293-1.414-1.414-3.707 3.707 3.707 3.707 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DocumentCode;
