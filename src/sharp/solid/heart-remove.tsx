import React from "react";
const HeartRemove: React.FC<
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
        d="m21.75 13.5-2.25 2.25L21.75 18l-1.414 1.414-2.25-2.25-2.25 2.25L14.422 18l2.25-2.25-2.25-2.25 1.414-1.414 2.25 2.25 2.25-2.25z"
      />
      <path
        fill="currentColor"
        d="M17 2.75c3.348 0 5.75 2.702 5.75 5.944 0 1.108-.317 2.193-.818 3.22l-1.596-1.596-2.25 2.25-2.25-2.25-3.182 3.182 2.25 2.25-2.25 2.25 1.775 1.774q-.229.165-.438.313C13.514 20.42 12 21.25 12 21.25s-1.514-.83-1.991-1.163A38 38 0 0 1 6.5 17.335C5.226 16.2 3.927 14.859 2.942 13.41c-.98-1.441-1.692-3.053-1.692-4.716C1.25 5.452 3.652 2.75 7 2.75c1.592 0 3.134.513 5 2.215 1.866-1.702 3.408-2.215 5-2.215"
      />
    </svg>
  );
};
export default HeartRemove;
