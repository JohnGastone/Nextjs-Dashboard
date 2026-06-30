import {Inter, Lusitana, Ubuntu} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana",
})

export const ubuntu = Ubuntu ({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-ubuntu"
})