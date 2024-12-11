'use client'
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import Link from "next/link";
export function Nav() {
    const pathname = usePathname();

    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link href="/" className="font-bold">Home</Link>
            </NavbarBrand>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/x6" className={`${pathname === "/x6" ? "font-bold" : ""} text-sky-600`}>X6绘图</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/echarts" className={`${pathname === "/echarts" ? "font-bold" : ""} text-sky-600`}>ECharts图表</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/echarts-dataset" className={`${pathname === "/echarts-dataset" ? "font-bold" : ""} text-sky-600`}>ECharts数据集</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/gdp" className={`${pathname === "/gdp" ? "font-bold" : ""} text-sky-600`}>ECharts-GDP</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/amis" className={`${pathname === "/amis" ? "font-bold" : ""} text-sky-600`}>Amis</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}