"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

    const [languaje, setLanguaje] = useState<"en" | "es">("es");
    return (
        <div className="home">
            <img src={languaje === "en" ? "https://raw.githubusercontent.com/miniesda/VisualMetros3D/main/my-app/public/img/cambiarEspañol.png" : "https://raw.githubusercontent.com/miniesda/VisualMetros3D/main/my-app/public/img/cambiarEnglish.png"} alt={languaje === "en" ? "Cambiar a Español" : "Change to English"}
            width={308} height={60} onClick={() => setLanguaje(languaje === "en" ? "es" : "en")}/>
            <h1>Visual Metros 3D</h1>
            <p>{languaje === "en" ? "Explore the metro stations of Sevilla in 3D and AR" : "Explora las estaciones de metro de Sevilla en 3D y AR"}</p>
                
                <Link href={`/virtualMap?lang=${languaje}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textDecoration: "none"}}>
                    <button>Virtual 3D Map</button>
                    <img src="https://raw.githubusercontent.com/miniesda/VisualMetros3D/main/my-app/public/img/virtualMap.png" width={150} height={150}></img>
                </Link>
                <Link href={`/arindex?lang=${languaje}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textDecoration: "none"}}>
                    <button>AR View</button>
                    <img src="https://raw.githubusercontent.com/miniesda/VisualMetros3D/main/my-app/public/img/ar.png" width={150} height={150}></img>
                </Link>
            </div>
    );
}