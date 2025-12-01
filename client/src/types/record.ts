export interface Record {
  id: number;
  user_id: number;
  item: string;
  duration: number;
  calories: number;
  date: string;
}

export interface BasicSummary {
  user_id: number;
  date: string;
  duration: number;
  calories: number;
}

export interface RecordItem {
  id: number;
  item: string;
  duration: number;
  calories: number;
}

export interface Summary extends BasicSummary {
  items: RecordItem[];
}
