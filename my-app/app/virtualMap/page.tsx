"use client";

import React, { useState } from "react";

type Station = { id: string; label: string; publicPath: string; img?: string };

const stations: Station[] = [
	{ id: "sevilla", label: "Sevilla", publicPath: "./Sevilla/index.html", img: "./img/estaciones/Sevilla.png" },
	{ id: "mayorca", label: "Mayorca", publicPath: "./Mayorca/index.html", img: "./img/estaciones/Mayorca.png" },
	{ id: "bilbao", label: "Bilbao", publicPath: "./Bilbao/index.html", img: "./img/estaciones/Bilbao.png" },
];

export default function Page() {
	const [selected, setSelected] = useState<Station | null>(null);

	// When a station is selected we hide the buttons and render the station HTML
	// fullpage. When no station is selected we show vertical buttons that fill
	// the viewport (each button expands evenly).
	if (selected) {
		return (
			<>
				<iframe
					src={selected.publicPath}
					title={selected.label}
					style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
					allowFullScreen
				/>
				<button
					onClick={() => setSelected(null)}
					style={{
						position: "fixed",
						top: 12,
						left: 12,
						zIndex: 9999,
						padding: "8px 12px",
						borderRadius: 8,
						border: "1px solid rgba(0,0,0,0.12)",
						background: "#0e7e30;",
						cursor: "pointer",
					}}
				>
					Back
				</button>
			</>
		);
	}

	return (
		<div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
			{stations.map((s) => (
				<button
					key={s.id}
					onClick={() => setSelected(s)}
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 12,
						border: "none",
						borderBottom: "1px solid #e5e7eb",
						background: "#fff",
						cursor: "pointer",
					}}
				>
					<img
						src={s.img}
						alt={s.label}
						style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 8 }}
					/>
					<span style={{ fontSize: 22, color: "#111" }}>{s.label}</span>
				</button>
			))}
		</div>
	);
}

