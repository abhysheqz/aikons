import React from "react";
const HierarchySquare_08: React.FC<
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
        d="M7.62 9.15c.242-.393.38-.857.38-1.35 0-1.388-1.1-2.55-2.5-2.55S3 6.412 3 7.8c0 .493.138.957.38 1.35-1.723.774-2.625 2.91-1.845 4.814.22.536.738.91 1.337.91h.183l.564 2.36c.208.87.968 1.516 1.881 1.516s1.673-.647 1.88-1.516l.565-2.36h.183c.6 0 1.117-.374 1.337-.91.78-1.904-.122-4.04-1.845-4.814M4.5 7.8c0-.6.467-1.05 1-1.05s1 .45 1 1.05-.467 1.05-1 1.05-1-.45-1-1.05"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.95 1.25h.1c.664 0 1.237 0 1.696.062.491.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v.098c0 .665 0 1.238-.062 1.697-.066.491-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.697.062h-.098c-.665 0-1.238 0-1.697-.062-.492-.066-.963-.215-1.345-.597s-.531-.854-.598-1.345c-.061-.459-.061-1.032-.061-1.697V4.95c0-.664 0-1.237.062-1.696.066-.491.215-.963.597-1.345s.853-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062M18.95 15.25h.1c.664 0 1.237 0 1.696.062.491.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v.098c0 .665 0 1.238-.062 1.697-.066.492-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.697.062h-.098c-.665 0-1.238 0-1.697-.062-.492-.066-.963-.215-1.345-.597s-.531-.854-.598-1.345c-.061-.459-.061-1.032-.061-1.697v-.099c0-.664 0-1.237.062-1.696.066-.492.215-.963.597-1.345s.853-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.926 4.003 15 4h1a1 1 0 1 1 0 2h-.962c-1.092.086-1.425.336-1.61.631-.272.435-.428 1.27-.428 3.022v4.694c0 1.752.156 2.587.428 3.022.185.295.518.545 1.61.631H16a1 1 0 1 1 0 2h-1l-.074-.003c-1.332-.099-2.494-.449-3.194-1.568-.615-.984-.732-2.384-.732-4.082V9.653c0-1.698.117-3.098.732-4.082.7-1.12 1.862-1.469 3.194-1.568"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_08;
