"use client";

import { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

interface WorldMap3DProps {
    className?: string;
}

export default function WorldMap3D({ className = "" }: WorldMap3DProps) {
    const chartRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<am5.Root | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rotationAnimationRef = useRef<any>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        // Create root element
        const root = am5.Root.new(chartRef.current);
        rootRef.current = root;

        // Set themes
        root.setThemes([am5.Theme.new(root)]);

        // Create map chart
        const chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "rotateY",
                projection: am5map.geoOrthographic(),
                paddingBottom: 20,
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
            })
        );

        // Create polygon series
        const polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"], // Exclude Antarctica for better view
            })
        );

        // Configure polygon template - Zaara Biotech theme
        polygonSeries.mapPolygons.template.setAll({
            fill: am5.color("#1a3a2a"), // Dark green base
            stroke: am5.color("#2d5a40"), // Slightly lighter green stroke
            strokeWidth: 0.5,
        });

        // Highlight countries where Zaara Biotech operates
        // India (IN), UAE (AE), UK (GB), USA (US), Canada (CA)
        polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
            const dataItem = target.dataItem;
            if (!dataItem) return fill;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dataContext = dataItem.dataContext as any;
            const id = dataContext?.id;

            // Country codes for Zaara Biotech presence
            if (id === "IN" || id === "AE" || id === "GB" || id === "US" || id === "CA") {
                return am5.color("#22c55e"); // Emerald green - Zaara brand color
            }
            return fill;
        });

        // Disable tooltips completely
        polygonSeries.mapPolygons.template.set("tooltip", undefined);

        // Make highlighted countries glow with brighter stroke
        polygonSeries.mapPolygons.template.adapters.add("stroke", (stroke, target) => {
            const dataItem = target.dataItem;
            if (!dataItem) return stroke;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dataContext = dataItem.dataContext as any;
            const id = dataContext?.id;

            if (id === "IN" || id === "AE" || id === "GB" || id === "US" || id === "CA") {
                return am5.color("#4ade80"); // Lighter green for glow effect
            }
            return stroke;
        });

        polygonSeries.mapPolygons.template.adapters.add("strokeWidth", (strokeWidth, target) => {
            const dataItem = target.dataItem;
            if (!dataItem) return strokeWidth;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dataContext = dataItem.dataContext as any;
            const id = dataContext?.id;

            if (id === "IN" || id === "AE" || id === "GB" || id === "US" || id === "CA") {
                return 2;
            }
            return strokeWidth;
        });

        // Enable mouse drag to rotate
        chart.set("wheelX", "none");
        chart.set("wheelY", "none");

        // Set initial rotation to show India prominently
        chart.set("rotationX", -75);
        chart.set("rotationY", -20);

        // Always rotate the map continuously
        rotationAnimationRef.current = chart.animate({
            key: "rotationX",
            to: 360,
            duration: 60000, // 60 seconds for a full rotation
            loops: Infinity,
            easing: am5.ease.linear,
        });

        // Cleanup
        return () => {
            if (rotationAnimationRef.current) {
                rotationAnimationRef.current.stop();
                rotationAnimationRef.current = null;
            }
            root.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            className={`w-full h-full ${className}`}
            style={{ minHeight: "400px" }}
        />
    );
}

