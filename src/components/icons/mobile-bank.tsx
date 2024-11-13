import { cn } from "@/lib/utils";

export const MobileBank = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("fill-gray-700", className)}
    >
      <path d="M6.87529 22.6806C5.83175 22.6806 4.78822 22.6813 3.74397 22.6793C3.65736 22.6793 3.56582 22.6767 3.48626 22.6509C3.32923 22.5994 3.25036 22.4837 3.26304 22.3258C3.27571 22.1685 3.36725 22.0648 3.53413 22.0364C3.62778 22.0205 3.72637 22.0212 3.82213 22.0212C5.84795 22.0205 7.87376 22.0205 9.90028 22.0205C10.2974 22.0205 10.4678 22.1203 10.4671 22.3496C10.4664 22.5769 10.289 22.6813 9.90169 22.6813C8.89265 22.6806 7.88432 22.6806 6.87529 22.6806Z" />
      <path d="M13.4316 21.9406C13.221 21.8864 13.0605 21.9836 12.9802 22.2122C12.7021 23.0038 12.2141 23.3349 11.3191 23.3362C10.1165 23.3375 8.91308 23.3369 7.7104 23.3362C5.91062 23.3362 4.11083 23.3336 2.31105 23.3375C1.7414 23.3389 1.29004 23.1327 0.964025 22.6959C0.743629 22.3999 0.698562 22.0609 0.698562 21.708C0.700675 15.2401 0.699972 8.77215 0.699972 2.30357C0.699972 2.22956 0.697858 2.15489 0.702787 2.08088C0.754893 1.26016 1.38158 0.691213 2.25612 0.675354C2.58073 0.669406 2.90605 0.677336 3.23066 0.671389C3.34402 0.669406 3.40106 0.702446 3.4419 0.806192C3.55034 1.08373 3.66793 1.35862 3.79467 1.62889C4.00662 2.08022 4.3784 2.3148 4.90792 2.31546C6.23382 2.31678 7.55972 2.31612 8.88492 2.31612C9.42499 2.31612 9.80311 2.08352 10.0144 1.61766C10.1341 1.35334 10.2538 1.08835 10.358 0.818747C10.4023 0.704429 10.4643 0.668746 10.5882 0.67205C10.86 0.679318 11.1325 0.677336 11.4043 0.673371C11.9507 0.665442 12.3901 0.859717 12.7253 1.26809C12.8915 1.4703 13.0985 1.50466 13.2675 1.37448C13.4266 1.25157 13.4358 1.06192 13.2816 0.869629C12.8992 0.393191 12.3958 0.0892227 11.7599 0.0403234C11.21 -0.00196786 10.6551 1.45651e-05 10.1031 1.45651e-05C7.51324 0.000675366 4.92341 0.00662261 2.33358 0.015213C2.14135 0.0158738 1.94489 0.0277683 1.759 0.0674163C0.692929 0.296714 0.002169 1.128 0.00146486 2.18396C-0.00135171 5.45493 0.000760027 8.7259 0.000760027 11.9975C0.000760027 15.252 5.58857e-05 18.5071 0.000760027 21.7615C0.00146417 23.1023 0.942902 23.9911 2.36949 23.9983C3.03702 24.0016 3.70384 23.999 4.37136 23.999C6.69784 23.999 9.02503 24.001 11.3515 23.9983C12.5098 23.997 13.4097 23.3666 13.6505 22.3985C13.7104 22.158 13.6308 21.9915 13.4316 21.9406ZM9.66369 0.687248C9.53976 0.962802 9.43696 1.22844 9.30106 1.47823C9.22571 1.617 9.06306 1.66457 8.89477 1.66457C7.57028 1.66457 6.24579 1.66457 4.9213 1.66457C4.68612 1.66457 4.51993 1.56479 4.43192 1.35796C4.33897 1.13924 4.24744 0.91985 4.14956 0.686587C5.99019 0.687248 7.80476 0.687248 9.66369 0.687248Z" />
      <path d="M22.7494 13.5009C19.4238 13.5002 16.0981 13.5002 12.7725 13.5009C12.0535 13.5009 11.7134 13.824 11.7134 14.5033C11.7127 16.372 11.7127 18.2415 11.7134 20.1102C11.7134 20.812 12.0408 21.1232 12.7816 21.1239C14.449 21.1245 16.1164 21.1239 17.7831 21.1239C19.459 21.1239 21.1348 21.1252 22.8114 21.1232C23.4705 21.1225 23.8141 20.7948 23.8141 20.1769C23.8148 18.2831 23.8141 16.3886 23.8141 14.4947C23.8134 13.8187 23.4747 13.5009 22.7494 13.5009ZM23.1177 20.1373C23.117 20.43 23.0818 20.4631 22.7706 20.4631C19.4343 20.4637 16.0981 20.4637 12.7626 20.4631C12.4408 20.4631 12.4232 20.4465 12.4232 20.1366C12.4225 19.2307 12.4288 18.3241 12.4183 17.4181C12.4162 17.2364 12.4591 17.1868 12.6598 17.1875C14.3631 17.1961 16.0664 17.1921 17.769 17.1921C19.4724 17.1921 21.1757 17.1954 22.8783 17.1875C23.0762 17.1868 23.1261 17.2324 23.1233 17.4181C23.1121 18.3247 23.1184 19.2313 23.1177 20.1373ZM12.4267 15.6901C12.4119 15.5137 12.4788 15.474 12.6598 15.4747C14.6159 15.4806 16.572 15.4786 18.5281 15.4786C19.9667 15.4786 21.4052 15.4826 22.8438 15.4747C23.0452 15.4734 23.1276 15.5143 23.1078 15.7165C23.0881 15.9121 23.0888 16.1123 23.1078 16.3086C23.1269 16.5022 23.0466 16.5379 22.8558 16.5372C21.2067 16.5306 19.5576 16.5333 17.9085 16.5333C17.8556 16.5333 17.8035 16.5333 17.7507 16.5333C16.058 16.5333 14.3652 16.53 12.6718 16.5379C12.476 16.5386 12.4084 16.4969 12.426 16.3079C12.4457 16.1024 12.4436 15.8943 12.4267 15.6901ZM23.1163 14.7557C23.0726 14.8747 22.9691 14.8205 22.8945 14.8205C21.9911 14.8244 21.087 14.8231 20.1835 14.8231C19.3766 14.8231 18.5689 14.8231 17.762 14.8231C16.0601 14.8231 14.3582 14.8192 12.6563 14.8284C12.4528 14.8297 12.4112 14.7762 12.4169 14.5971C12.4302 14.1683 12.4197 14.1683 12.8886 14.1683C16.1523 14.1683 19.416 14.1683 22.6797 14.1683C23.0811 14.1683 23.2487 14.3949 23.1163 14.7557Z" />
      <path d="M13.3577 4.03884C14.2006 4.03487 14.8886 4.6666 14.8942 5.45031C14.8998 6.23402 14.2217 6.8783 13.3817 6.88887C12.5473 6.89945 11.8558 6.25979 11.8516 5.47278C11.8474 4.67849 12.5156 4.0428 13.3577 4.03884Z" />
      <path d="M19.8257 18.445C19.1244 18.445 18.4231 18.4464 17.7217 18.4444C17.4126 18.4437 17.2669 18.3373 17.2676 18.1199C17.2683 17.9032 17.4197 17.7908 17.7217 17.7902C19.1328 17.7889 20.5439 17.7889 21.9558 17.7902C22.2522 17.7902 22.4043 17.9111 22.3965 18.1311C22.3895 18.3406 22.2501 18.443 21.9558 18.4437C21.246 18.4464 20.5362 18.445 19.8257 18.445Z" />
      <path d="M19.8199 19.7118C19.1101 19.7118 18.3996 19.7138 17.6898 19.7111C17.4244 19.7098 17.2807 19.5981 17.2702 19.3992C17.2589 19.1917 17.3948 19.0615 17.6518 19.0556C17.9757 19.0483 18.3003 19.0536 18.6249 19.0536C19.729 19.0536 20.8338 19.0543 21.9379 19.053C22.1006 19.053 22.2555 19.0622 22.352 19.2115C22.5027 19.4448 22.3259 19.7071 22.0027 19.7098C21.2746 19.7157 20.5473 19.7118 19.8199 19.7118Z" />
      <path d="M23.5756 7.94024C20.3675 6.07215 17.1609 4.20209 13.9563 2.32871C13.5557 2.09413 13.1789 2.09876 12.7769 2.334C9.57303 4.20869 6.36567 6.07744 3.15901 7.94751C2.80764 8.15236 2.67244 8.41932 2.76046 8.72659C2.85481 9.05369 3.10268 9.21096 3.54206 9.21294C4.12157 9.21559 4.70108 9.22418 5.27988 9.20832C5.49605 9.20237 5.53266 9.27109 5.53196 9.45546C5.52492 11.4326 5.52915 13.4104 5.52633 15.3875C5.52633 15.5917 5.61857 15.8514 5.4883 15.9835C5.3686 16.1058 5.09046 16.0119 4.88274 16.0205C4.32929 16.0436 3.96666 16.384 3.95891 16.902C3.95328 17.2562 3.95468 17.6104 3.95891 17.9646C3.96525 18.4886 4.31239 18.8501 4.86937 18.8534C6.79167 18.8646 8.71468 18.86 10.637 18.8573C10.894 18.8567 11.0489 18.7252 11.0545 18.5335C11.0602 18.3346 10.894 18.2005 10.6285 18.1932C10.5581 18.1912 10.4884 18.1926 10.418 18.1926C8.62737 18.1926 6.83603 18.1926 5.0447 18.1926C4.67784 18.1926 4.66516 18.18 4.66446 17.8271C4.66376 17.5635 4.66376 17.2998 4.66446 17.0362C4.66587 16.7058 4.68348 16.6886 5.03766 16.6879C6.67901 16.6873 8.32036 16.6879 9.96172 16.6879C10.2075 16.6879 10.4532 16.6945 10.6983 16.684C10.8975 16.6754 11.0327 16.569 11.0503 16.3793C11.0658 16.2155 10.9785 16.08 10.8011 16.0489C10.6363 16.0205 10.6278 15.9359 10.6285 15.8097C10.6328 14.7472 10.6307 13.6839 10.6307 12.6214C10.6307 11.7478 10.6292 10.8749 10.6314 10.0013C10.6321 9.74753 10.5398 9.40457 10.6771 9.26382C10.8341 9.10325 11.2052 9.23607 11.4813 9.21096C11.6643 9.19444 11.7171 9.24995 11.7157 9.42572C11.7066 10.4308 11.7108 11.4359 11.7115 12.441C11.7115 12.515 11.7073 12.591 11.7228 12.6623C11.7594 12.8361 11.8706 12.9418 12.0671 12.9418C12.2643 12.9418 12.3713 12.8302 12.4107 12.6597C12.4269 12.5883 12.4206 12.5123 12.4206 12.4383C12.4213 11.4412 12.4276 10.4447 12.4156 9.44753C12.4135 9.2473 12.4783 9.20303 12.6776 9.20898C13.1515 9.22219 13.6261 9.22153 14.0993 9.20898C14.2858 9.20369 14.3309 9.25722 14.3295 9.4277C14.3211 10.4328 14.3253 11.4379 14.3253 12.4429C14.3253 12.5169 14.3168 12.5929 14.3316 12.665C14.3668 12.8407 14.4837 12.9438 14.6767 12.9412C14.8689 12.9385 14.9858 12.8368 15.0139 12.6577C15.0259 12.585 15.0196 12.5097 15.0196 12.4357C15.0196 11.4306 15.0231 10.4255 15.0167 9.42043C15.016 9.26581 15.0477 9.19642 15.2308 9.20964C15.4575 9.2255 15.6878 9.22285 15.9152 9.2103C16.0786 9.20105 16.1223 9.25061 16.1201 9.40325C16.111 10.0456 16.1159 10.6885 16.1159 11.3308C16.1159 11.7425 16.1131 12.1548 16.1173 12.5665C16.1194 12.807 16.2532 12.9458 16.4673 12.9438C16.6806 12.9418 16.8039 12.8051 16.8109 12.5599C16.813 12.4938 16.8116 12.4284 16.8116 12.3623C16.8116 11.3817 16.8144 10.4017 16.8081 9.42109C16.8074 9.26779 16.8377 9.20435 17.0214 9.20898C17.5129 9.22153 18.0051 9.22285 18.4959 9.20898C18.6903 9.20369 18.7241 9.26779 18.7219 9.43299C18.7128 10.1414 18.7177 10.8497 18.7177 11.5588C18.7177 11.905 18.7107 12.2513 18.7212 12.5969C18.7283 12.8176 18.8776 12.9524 19.0811 12.9425C19.3043 12.9313 19.4028 12.7991 19.4254 12.6048C19.4317 12.548 19.4275 12.4899 19.4275 12.4317C19.4275 11.6242 19.4233 10.8167 19.4303 10.0092C19.4324 9.74885 19.3092 9.40061 19.4838 9.25325C19.6359 9.12506 20.0021 9.23078 20.2718 9.20964C20.4767 9.19378 20.5161 9.26316 20.514 9.4429C20.5048 10.448 20.5091 11.4531 20.5105 12.4581C20.5105 12.5473 20.5154 12.6412 20.5414 12.7258C20.5858 12.8665 20.6992 12.9392 20.8562 12.9425C21.0139 12.9458 21.1202 12.8718 21.1836 12.7383C21.2287 12.6438 21.2174 12.5447 21.2174 12.4462C21.2181 11.4491 21.2223 10.4526 21.2132 9.45546C21.2118 9.27043 21.2491 9.20237 21.466 9.20766C22.0624 9.22351 22.6602 9.21889 23.2566 9.21096C23.6967 9.20501 23.9769 8.97043 23.9988 8.59575C24.0178 8.29311 23.8418 8.09553 23.5756 7.94024ZM7.32682 15.7417C7.32823 15.9901 7.25218 16.0529 7.00785 16.0265C6.83463 16.0073 6.65578 16.0106 6.48185 16.0258C6.28188 16.043 6.21569 15.9895 6.2178 15.7873C6.22977 14.7326 6.22343 13.6786 6.22343 12.624C6.22343 11.5694 6.22765 10.5147 6.2192 9.46074C6.21779 9.27638 6.25301 9.18783 6.4734 9.21228C6.74802 9.24268 7.1198 9.10259 7.27541 9.26845C7.41202 9.41449 7.31837 9.75414 7.31837 10.0085C7.31978 11.9189 7.31345 13.83 7.32682 15.7417ZM9.71668 16.0251C9.22589 16.0166 8.73369 16.0139 8.2429 16.0258C8.06053 16.0304 8.00843 15.9835 8.00984 15.8091C8.01899 14.7472 8.01406 13.6852 8.01406 12.6233C8.01406 11.5694 8.0204 10.516 8.00843 9.46206C8.00632 9.25061 8.07532 9.20303 8.28727 9.20964C8.7689 9.22418 9.25194 9.21955 9.73428 9.21096C9.88637 9.20832 9.9244 9.25457 9.9237 9.39268C9.91947 11.5416 9.91876 13.6899 9.9251 15.8388C9.92651 15.9994 9.87159 16.0278 9.71668 16.0251ZM3.47869 8.54025C3.68007 8.42064 3.82935 8.33077 3.97933 8.24289C7.02122 6.46863 10.0638 4.69504 13.1029 2.91683C13.2895 2.80779 13.4317 2.79392 13.6268 2.90824C16.7841 4.75716 19.9457 6.59947 23.1066 8.44377C23.1418 8.46425 23.1756 8.48606 23.2644 8.54091C16.6468 8.54025 10.0962 8.54025 3.47869 8.54025Z" />
      <path d="M14.2671 17.5945C13.513 17.5905 12.9011 18.1648 12.9004 18.8765C12.8997 19.5762 13.501 20.1518 14.2411 20.1597C14.9931 20.1677 15.6134 19.6 15.6289 18.889C15.6437 18.1932 15.0185 17.5985 14.2671 17.5945ZM14.2537 19.5022C13.9031 19.4989 13.6031 19.2201 13.5947 18.889C13.5862 18.55 13.8925 18.2533 14.2523 18.2507C14.6199 18.248 14.9171 18.5269 14.9185 18.8758C14.9199 19.2234 14.6206 19.5055 14.2537 19.5022Z" />
    </svg>
  );
};