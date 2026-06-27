import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Juliana Ottero | Personal Trainer",
  description:
    "Consultoria online e presencial com acompanhamento personalizado",
};

export default function JulianaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={montserrat.className}>
      {children}
    </div>
  );
}