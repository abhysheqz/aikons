import React from "react";
const Monas: React.FC<
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
        d="M13 22.75V19h-2v3.75H7.575l-3.218-5.364A.75.75 0 0 1 5 16.25h14a.75.75 0 0 1 .643 1.136l-3.218 5.364zM8.549 15h6.901l-1.526-7.25H15.5v-1.5h-1.078c.181-.379.328-.822.328-1.25 0-.518-.184-1.005-.403-1.409a6.3 6.3 0 0 0-.78-1.1 10 10 0 0 0-.745-.767c-.098-.09-.277-.244-.344-.301l-.006-.006a.75.75 0 0 0-.944 0l-.006.006c-.067.057-.246.21-.344.3a10 10 0 0 0-.745.768c-.271.313-.558.69-.78 1.1-.219.404-.403.89-.403 1.409 0 .428.147.871.328 1.25H8.5v1.5h1.575z"
      />
    </svg>
  );
};
export default Monas;
