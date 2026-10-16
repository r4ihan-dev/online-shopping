// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar1Icon } from "lucide-react";
// import { format } from "date-fns-jalali";

// import React from "react";

// function JalaliDatePicker({
//   manDate,
//   setManDate,
// }: {
//   manDate: Date;
//   setManDate: any;
// }) {
//   return (
//     <div className="pt-2">
//       <Popover>
//         <PopoverTrigger className="w-full  gap-4 border flex items-center flex-nowrap px-3 text-center py-1.5 rounded-lg">
//           <Calendar1Icon />
//           {manDate ? format(manDate, "yyy/MM/dd") : "slect a date"}
//         </PopoverTrigger>
//         <PopoverContent className="w-full " align="start">
//           <Calendar
//             dir="rtl"
//             selected={manDate}
//             onSelect={setManDate}
//             mode={"single"}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// export default JalaliDatePicker;

import { Input } from "@/components/ui/input";
import React from "react";

function JalaliDatePicker({
  manDate,
  setManDate,
}: {
  manDate: Date;
  setManDate: any;
}) {
  return (
    <DatePicker
      value={manDate}
      onChange={setManDate}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      format="yyy/MM/dd"
      render={<CustomInput />}
    />
  );
}

export default JalaliDatePicker;

function CustomInput({ props: any }) {
  const { openCalendar, onOpen, ...inputProps } = props;
  return <Input {...inputProps} readOnly className="w-full" />;
}

export default CustomInput;
