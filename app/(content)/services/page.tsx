import { CallBackForm } from "@/components/cms/call-back-form";
import { ServiceListMain } from "@/components/cms/service-list-main";

export default function Services() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <ServiceListMain />
      <CallBackForm />
    </main>
  );
}
