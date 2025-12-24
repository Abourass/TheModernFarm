export interface GlossaryEntry {
  term: string;
  abbreviation?: string;
  definition: string;
  related?: string[];
  category: string;
  articleLink?: string;
}

export interface GlossaryData {
  terms: Record<string, GlossaryEntry>;
}

// ============================================
// Chart Component Types
// ============================================

/**
 * Category-based color theming for charts
 * Maps article categories to color schemes
 */
export type ChartCategory = 
  | 'microbiology'
  | 'plant-biology'
  | 'fermentation'
  | 'soil-science'
  | 'default';

export interface CategoryColors {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
}

/**
 * BarChart data structure
 */
export interface BarChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartGroup {
  label: string;
  values: BarChartDataPoint[];
}

export interface BarChartProps {
  data: BarChartDataPoint[] | BarChartGroup[];
  title?: string;
  caption?: string;
  xLabel?: string;
  yLabel?: string;
  yMax?: number;
  yMin?: number;
  unit?: string;
  stacked?: boolean;
  horizontal?: boolean;
  showValues?: boolean;
  category?: ChartCategory;
  colors?: string[];
}

/**
 * LineChart data structure
 */
export interface LineChartDataPoint {
  x: number;
  y: number;
  label?: string;
}

export interface LineChartSeries {
  name: string;
  data: LineChartDataPoint[];
  color?: string;
  dashed?: boolean;
}

export interface LineChartProps {
  series: LineChartSeries[];
  title?: string;
  caption?: string;
  xLabel?: string;
  yLabel?: string;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  showDots?: boolean;
  smooth?: boolean;
  showArea?: boolean;
  category?: ChartCategory;
}

/**
 * RadarChart data structure
 */
export interface RadarChartAxis {
  key: string;
  label: string;
  max?: number;
}

export interface RadarChartDataset {
  name: string;
  values: Record<string, number>;
  color?: string;
}

export interface RadarChartProps {
  axes: RadarChartAxis[];
  datasets: RadarChartDataset[];
  title?: string;
  caption?: string;
  showLabels?: boolean;
  showValues?: boolean;
  category?: ChartCategory;
}

/**
 * Timeline data structure
 */
export interface TimelineStep {
  title: string;
  duration?: string;
  description?: string;
  status?: 'complete' | 'active' | 'pending';
  icon?: string;
}

export interface TimelineProps {
  steps: TimelineStep[];
  title?: string;
  caption?: string;
  orientation?: 'horizontal' | 'vertical';
  showDuration?: boolean;
  category?: ChartCategory;
}

/**
 * ComparisonTable data structure
 */
export interface ComparisonTableCell {
  value: string | number;
  heatValue?: number; // 0-1 for heat coloring intensity
  highlight?: boolean;
}

export interface ComparisonTableRow {
  header: string;
  cells: (string | number | ComparisonTableCell)[];
}

export interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonTableRow[];
  title?: string;
  caption?: string;
  showHeat?: boolean;
  heatColors?: { low: string; high: string };
  category?: ChartCategory;
}

/**
 * FlowDiagram data structure
 */
export interface FlowNode {
  id: string;
  label: string;
  description?: string;
  type?: 'input' | 'process' | 'output' | 'decision';
}

export interface FlowConnection {
  from: string;
  to: string;
  label?: string;
}

export interface FlowDiagramProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  title?: string;
  caption?: string;
  direction?: 'horizontal' | 'vertical';
  category?: ChartCategory;
}
