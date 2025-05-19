import React from "react";
const Doughnut: React.FC<
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
        d="M12 9a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 10 0 1 1 0 1 1-2 0 3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-.523-3.03c-1.976.223-3.912-1.106-4.374-3.07a4 4 0 0 1-2.958-2.828A9 9 0 0 0 12 3M1 12C1 5.925 5.925 1 12 1q1.134.002 2.206.222a1 1 0 0 1 .799.913A2 2 0 0 0 17 4a1 1 0 0 1 1 1c0 1.368 1.46 2.352 2.719 1.867a1 1 0 0 1 1.266.513A11 11 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.912 10.011c.81.084 1.444.62 1.876 1.278l.214.327c.118.181.225.281.299.333.07.049.106.05.11.051s.027.002.078-.027a.9.9 0 0 0 .272-.262l.44-.588a1 1 0 0 1 1.79.739q.01.067.01.138a3 3 0 0 0 6 0 1 1 0 0 1 .808-.981l.047-.057c.504-.612 1.22-1.037 2.056-.95.81.083 1.444.618 1.876 1.277l.214.327c.118.181.225.281.299.333.07.049.106.05.11.051s.027.002.078-.027a.9.9 0 0 0 .272-.262l.44-.588a1 1 0 0 1 1.79.739q.01.067.01.138c0 6.075-4.925 11-11 11-5.94 0-10.78-4.708-10.993-10.596a1 1 0 0 1 .22-.664l.628-.778c.504-.613 1.22-1.037 2.056-.95"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doughnut;
