import { HTTP_STATUS_CODE } from "@/constants/http-status";
import { paymentMethodProvider } from "@/providers/payment-method-provider";
import { EditPaymentMethodView } from "@/views/forma-pagto/edit";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    id: number;
  }>;
}
export default async function Page(props: Props) {
  try {
    const { get } = paymentMethodProvider();
    const { id } = await props.params;
    console.log(id);

    const data = await get(id);
    return (
      <EditPaymentMethodView data={data} />
    );
  } catch (error) {
    if (error.statusCode == HTTP_STATUS_CODE.NOT_FOUND) redirect("/404");
    redirect("/500");

  }
}