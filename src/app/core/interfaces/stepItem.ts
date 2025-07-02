import { ITab } from './tab.interface';

export interface StepItem {
  gifUrl?: string;
  title?: string;
  value?: string;
  description?: string;
}
export interface ITutorialTab extends ITab {
  steps: StepItem[];
}
