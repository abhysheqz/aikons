import React from "react";
const CleaningBucket: React.FC<
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
        d="M9.896 3.093C10.922 1.843 12.342 1 13.975 1c1.792 0 3.322 1.014 4.365 2.467.92 1.282 1.507 2.955 1.634 4.783H21a.75.75 0 0 1 .748.808l-.246 3.192H12v1.5h9.387l-.497 6.46a2.75 2.75 0 0 1-2.742 2.54H9.766a2.75 2.75 0 0 1-2.729-2.41L6.87 19H4a2 2 0 0 1-2-2v-7a3 3 0 0 1 3-3h3.137c.29-1.507.901-2.863 1.759-3.907m1.959 5.157h6.113c-.122-1.437-.59-2.695-1.252-3.617C15.94 3.553 14.958 3 13.975 3c-.9 0-1.792.46-2.534 1.363-.558.68-1.006 1.587-1.26 2.645.76.068 1.399.562 1.674 1.242M9.014 9H5a1 1 0 0 0-1 1v3h6V9zM4 15h6v2H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CleaningBucket;
