import React from "react";
const Location_09: React.FC<
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
        d="M5.148 19.265q-.057.045-.09.078.048.048.15.122c.28.2.752.42 1.423.622 1.331.4 3.23.663 5.369.663 2.14 0 4.038-.262 5.369-.663.671-.202 1.142-.423 1.423-.622q.102-.075.15-.122a1 1 0 0 0-.09-.078c-.222-.173-.606-.375-1.175-.569l.646-1.893c.676.231 1.292.52 1.759.885.454.354.918.904.918 1.655 0 .815-.545 1.393-1.049 1.751-.53.377-1.23.675-2.006.908-1.565.471-3.666.748-5.945.748s-4.38-.277-5.945-.748c-.776-.233-1.477-.531-2.006-.908C3.545 20.736 3 20.158 3 19.343c0-.75.464-1.3.918-1.655.467-.364 1.083-.654 1.76-.884l.645 1.893c-.569.193-.953.395-1.175.568"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c-4.267 0-7.75 3.398-7.75 7.619 0 2.42.997 4.304 2.886 5.93 1.215 1.046 3.392 3.266 4.229 4.6a.75.75 0 0 0 1.257.02c.894-1.329 3.04-3.586 4.242-4.62 1.89-1.626 2.886-3.51 2.886-5.93 0-4.221-3.483-7.619-7.75-7.619M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_09;
