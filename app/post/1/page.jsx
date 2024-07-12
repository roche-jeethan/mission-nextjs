"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>; 
// Here as i run it, i realised by the code and what it is printing is that it is using "usePathname" to get the 
//current path of the page and then it is printing it out. So the output is "post/post/1
}