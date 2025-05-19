import React from "react";
const Mining_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.959 20.623v-5.321m1.564 0v-1.33m0 7.98v-1.33m-1.564-2.66h3.13m0 0c.518 0 .938.447.938.998v.665c0 .55-.42.997-.939.997H16.02m4.068-2.66c.519 0 .94-.447.94-.997v-.666c0-.55-.421-.997-.94-.997H16.02"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.492 10.437-7.437 7.405a.1.1 0 0 0 0 .14l1.914 1.945a.1.1 0 0 0 .141 0l7.412-7.437m2.253-8.263c-3.545-2.198-6.652-2.39-8.277-2.224-.094 0-.075.075 0 .133 1.912 1.306 2.89 1.87 5.725 4.6m6.625 1.501a13.2 13.2 0 0 1 1.363 2.797m-3.903-.336c.493.518.862.911 1.222 1.329M11.384 7.69l3.901 3.935c.039.04.027.039.066 0l4.529-4.503c.253-.127-.052-.288-.09-.328L16.128 3.17c-.038-.039-.146-.12-.185-.08l-4.241 4.225c-.04.039-.357.335-.318.375Z"
      />
    </svg>
  );
};
export default Mining_03;
