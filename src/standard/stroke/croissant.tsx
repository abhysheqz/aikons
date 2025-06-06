import React from "react";
const Croissant: React.FC<
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
        d="M11.896 11.897c-.516.517-1.39 1.143-2.174 1.1-2.296-.122-4.559-1.517-6.097-2.8a1.7 1.7 0 0 1-.435-2.094c.422-.816 1.097-1.915 2.048-2.865.95-.95 2.05-1.626 2.865-2.048a1.7 1.7 0 0 1 2.094.435c1.283 1.538 2.678 3.801 2.8 6.097.043.784-.583 1.658-1.1 2.174"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 3.422c.705-.586 2.973-1.545 5.433-1.409.364.02.699.164.957.379.235.196.399.444.45.718a8.85 8.85 0 0 1-.219 4.235c-.14.458-.535.829-1.063 1.004a17.6 17.6 0 0 1-2.6.651M3.422 10c-.586.705-1.545 2.973-1.409 5.433.02.364.164.699.379.957.196.235.444.399.718.45a8.85 8.85 0 0 0 4.235-.219c.458-.14.829-.535 1.004-1.063a17.6 17.6 0 0 0 .651-2.6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7c1-.5 2.05.004 2.877.372.659.292 1.412.071 1.83-.53.479-.69.36-1.646-.274-2.19l-1.18-1.011C19.324 2.844 18.209 2.5 17 2.5M7 17c-.5 1 .004 2.05.372 2.877.292.659.071 1.412-.53 1.83-.69.479-1.646.36-2.19-.274l-1.011-1.18C2.844 19.324 2.5 18.209 2.5 17"
      />
    </svg>
  );
};
export default Croissant;
