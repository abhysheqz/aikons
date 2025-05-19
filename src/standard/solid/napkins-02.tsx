import React from "react";
const Napkins_02: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .643.364l6 10a.75.75 0 0 1-.113.916l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1-.113-.916l6-10A.75.75 0 0 1 12 1.25m-4.35 9.46-.705 1.175 5.056 5.056 5.056-5.056-.705-1.174-3.82 3.82a.75.75 0 0 1-1.062 0zm-2.293 4.906.536-.893 4.693 4.693a2 2 0 0 0 2.828 0l4.693-4.693.536.893a.75.75 0 0 1-.113.916l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1-.113-.916"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Napkins_02;
