export type trashInfo = {
  userName: string;
  id: string;
  timeCreated: string;
  title: string;
  content: string;
  willBeNotified: boolean;
  day: string;
  tasks: string[];
  deleteDate: string;
};

export const trashActionsType = {
  DELETE_ITEM: 'DELETE_ITEM',
  RESTORE_ITEMS: 'RESTORE_ITEMS',
  RESTORE_ITEM: 'RESTORE_ITEM',
};
