import React from "react";
const Hold_05: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.458 5.71a1.5 1.5 0 0 0-2.955-.522L7.5 14.5l-1.53-2.048a1.3 1.3 0 0 0-.192-.214 1.693 1.693 0 0 0-2.412.237c-.483.603-.482 1.21-.033 2.072.3.576 1.837 3.487 2.823 5.355A3 3 0 0 0 8.81 21.5l7.637-.002a3 3 0 0 0 2.96-2.522l1.571-9.735a1.5 1.5 0 0 0-2.955-.52m-5.564-3.012.348-1.97a1.5 1.5 0 0 1 2.955.522l-.347 1.97m-2.956-.522-.781 4.431m3.737-3.91-.782 4.431m.782-4.43a1.5 1.5 0 0 1 2.955.52l-.347 1.97m0 0-.435 2.461"
      />
    </svg>
  );
};
export default Hold_05;
