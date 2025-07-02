export interface ITab {
  id?: string;
  title: string;
  subTitle?: string;
  icon?: string;
  content?: string;
  removable?: boolean;
  disabled?: boolean;
  active?: boolean;
  customClass?: string;
  status?: string;
}
