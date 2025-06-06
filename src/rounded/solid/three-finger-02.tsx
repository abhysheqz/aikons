import React from "react";
const ThreeFinger_02: React.FC<
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
        d="M10.81 10.185a.426.426 0 0 0 .432-.419v-7.22a1.297 1.297 0 0 1 2.593 0v8.337c0 .231.193.419.432.419a.426.426 0 0 0 .432-.419V4.614a1.297 1.297 0 1 1 2.593 0V12c0 .231.194.419.432.419a.426.426 0 0 0 .433-.42v-1.817c0-.338 0-.507.136-.595.137-.09.271-.03.54.09.98.436 1.666 1.411 1.667 2.514v1.82c0 1.847 0 2.977-.336 3.911a5.7 5.7 0 0 1-1.17 1.931c-.365.398-.564.81-.564 1.192 0 .941-.763 1.705-1.705 1.705H9.472c-.2 0-.409 0-.597-.04a1.75 1.75 0 0 1-1.334-1.335 3 3 0 0 1-.041-.597v-.053a1.25 1.25 0 0 0-.273-.78L5.23 17.446l-.034-.047-.021-.03c-.487-.718-.883-1.3-1.158-1.805-.287-.525-.478-1.025-.511-1.583-.02-.32.003-.642.067-.956.111-.548.371-1.017.728-1.497.333-.447.845-1.013 1.405-1.63l.06-.068.139-.132c.433-.412.65-.619.832-.54.181.077.181.376.181.975v3.5c0 .23.194.418.433.418a.426.426 0 0 0 .432-.419V4.047a1.297 1.297 0 0 1 2.593 0v5.72c0 .23.194.418.432.418"
      />
    </svg>
  );
};
export default ThreeFinger_02;
