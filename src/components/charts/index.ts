/**
 * Chart Components Index
 * 
 * Re-exports all chart components for convenient importing in MDX files.
 * 
 * Usage in MDX:
 *   import { BarChart, LineChart, RadarChart } from '../components/charts';
 * 
 * Or import individually:
 *   import BarChart from '../components/charts/BarChart.astro';
 */

// Note: In Astro, we can't directly re-export .astro components from a .ts file
// This file serves as documentation for the available chart components.

/**
 * Available Chart Components:
 * 
 * BarChart.astro
 * - Grouped/stacked bar charts for comparisons
 * - Props: data, title, caption, xLabel, yLabel, yMax, yMin, unit, stacked, horizontal, showValues, category, colors
 * 
 * LineChart.astro  
 * - SVG line charts for time-series and spectrum data
 * - Props: series, title, caption, xLabel, yLabel, xMin, xMax, yMin, yMax, showDots, smooth, showArea, category
 * 
 * RadarChart.astro
 * - Multi-dimensional radar/spider charts
 * - Props: axes, datasets, title, caption, showLabels, showValues, category
 * 
 * Timeline.astro
 * - Horizontal/vertical process timelines
 * - Props: steps, title, caption, orientation, showDuration, category
 * 
 * ComparisonTable.astro
 * - Styled tables with optional heat-coloring
 * - Props: columns, rows, title, caption, showHeat, heatColors, category
 * 
 * FlowDiagram.astro
 * - Biosynthesis pathways and process flows
 * - Props: nodes, connections, title, caption, direction, category
 * 
 * 
 * Category-based theming:
 * 
 * All charts support a `category` prop that auto-themes colors:
 * - 'microbiology' - Purple tones (#8b5cf6)
 * - 'plant-biology' - Green tones (#16a34a)  
 * - 'fermentation' - Orange tones (#ea580c)
 * - 'soil-science' - Stone/gray tones (#78716c)
 * - 'default' - Teal accent tones (#0d9488)
 * 
 * 
 * Example usage in an MDX article:
 * 
 * ```mdx
 * ---
 * title: "Impact of LAB on Plant Growth"
 * category: "Microbiology"
 * ---
 * 
 * import BarChart from '../components/charts/BarChart.astro';
 * import LineChart from '../components/charts/LineChart.astro';
 * 
 * ## Yield Comparison
 * 
 * <BarChart
 *   data={[
 *     { label: 'Control', value: 100 },
 *     { label: 'LAB Treatment', value: 119 }
 *   ]}
 *   title="Yield Increase with LAB Application"
 *   yLabel="Relative Yield (%)"
 *   category="microbiology"
 * />
 * 
 * ## pH During Fermentation
 * 
 * <LineChart
 *   series={[{
 *     name: 'pH',
 *     data: [
 *       { x: 0, y: 6.2 },
 *       { x: 7, y: 3.8 },
 *       { x: 14, y: 3.2 }
 *     ]
 *   }]}
 *   title="Fermentation pH Curve"
 *   xLabel="Days"
 *   yLabel="pH Level"
 *   category="fermentation"
 * />
 * ```
 */

export {};
