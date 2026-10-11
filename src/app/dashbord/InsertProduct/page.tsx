import { title } from "process";
import DashbordHeader from "../dashbord_header";
import DashboardSidebar from "../dashbord_sidebar";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import InsertProductForm from "../InsertProduct_form";
export const metadata = {
  title: "اضافه کردن محصول",
};
function InsertProduct() {
  const t = useTranslations("dashbord.insertProduct");
  return (
    <div className="w-full flex">
      <DashboardSidebar />
      <div className="flex-1">
        <DashbordHeader />
        <Card className="p-0 m-6">
          <div className="w-full p-4">
            <p>{t("title")}</p>
            <InsertProductForm />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default InsertProduct;
