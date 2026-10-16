// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { CalendarIcon } from "lucide-react";
// import React from "react";

// function EndDateShamsi() {
//   return (
//     <div className="pt-2">
//       <Popover>
//         <PopoverTrigger className="w-full border rounded-lg px-2 py-1.5">
//           <CalendarIcon />
//         </PopoverTrigger>
//         <PopoverContent>
//           <Calendar mode="single" />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// export default EndDateShamsi;
import { Input } from "@/components/ui/input";
import React from "react";

function EndDateShamsi({
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
      render={EndDateShamsiInput}
    />
  );
}

export default EndDateShamsi;
function EndDateShamsiInput(props: any) {
  const { onOpen, openCalendar, ...inputProps } = props;
  return <Input {...inputProps} readOnly className="w-full" />;
}
