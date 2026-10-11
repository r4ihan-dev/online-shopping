import { title } from "process";
import DashbordHeader from "../dashbord_header";
import DashboardSidebar from "../dashbord_sidebar";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
export const metadata = {
  title: "اضافه کردن محصول",
};
function page() {
  return (
    <div className="w-full flex">
      <DashboardSidebar />
      <div className="flex-1">
        <DashbordHeader />
        <Card className="p-0 m-6">
          <div className="w-full p-4">
            <h1>add new product</h1>
            <form action="" className="w-full grid grid-cols-2 gap-4">
              <Input type="text" name="name" placeholder="Product name" />
              <div className="relative ">
                <Input type="number" name="price" placeholder="price" />
                <div className="absolute left-1 top-2 text-xs h-5 dark:bg-gray-950 bg-white">
                  افغانی
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default page;
