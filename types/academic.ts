export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  images: string[];
} 