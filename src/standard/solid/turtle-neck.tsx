import React from "react";
const TurtleNeck: React.FC<
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
        d="M9.75 2.5a.25.25 0 0 0-.25.25v1.517a.75.75 0 0 1-1.5 0V2.75C8 1.784 8.784 1 9.75 1h4c.966 0 1.75.784 1.75 1.75v1.512a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.5 17.348v2.402a2.75 2.75 0 0 1-2.75 2.75h-6A2.75 2.75 0 0 1 6 19.75V17.35l-1.038 3.137a.75.75 0 0 1-.859.5l-2.5-.5a.75.75 0 0 1-.593-.854L2.935 7.593a1.75 1.75 0 0 1 .832-1.226L8 3.842l1.494.515c1.147.717 2.844 1.009 4.512 0l1.494-.52 4.234 2.53c.444.266.748.714.83 1.226l1.927 12.039a.75.75 0 0 1-.594.854l-2.5.5a.75.75 0 0 1-.859-.5z"
      />
    </svg>
  );
};
export default TurtleNeck;
