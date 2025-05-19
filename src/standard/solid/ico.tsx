import React from "react";
const Ico: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1M6.5 9.25a.75.75 0 1 0-1.5 0v5a.75.75 0 0 0 1.5 0zm8.5 2a1.25 1.25 0 0 1 2.5 0v1a1.25 1.25 0 1 1-2.5 0zm1.25-2.75a2.75 2.75 0 0 0-2.75 2.75v1a2.75 2.75 0 1 0 5.5 0v-1a2.75 2.75 0 0 0-2.75-2.75m-5.926 0A2.824 2.824 0 0 0 7.5 11.324v.852A2.824 2.824 0 0 0 10.324 15h.219c.652 0 1.277-.259 1.737-.72a.75.75 0 1 0-1.06-1.06.96.96 0 0 1-.677.28h-.22A1.324 1.324 0 0 1 9 12.176v-.852C9 10.593 9.593 10 10.324 10h.219c.254 0 .497.1.677.28a.75.75 0 1 0 1.06-1.06 2.46 2.46 0 0 0-1.737-.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ico;
